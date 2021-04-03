import React, {
  useMemo,
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
} from 'react'
import {
  animated as a,
  SpringHandle,
  useChain,
  useTransition,
  config,
} from 'react-spring'
import styled from 'styled-components'
import { useImmer } from 'use-immer'
import { useMeasure } from './useMeasure'

const ResizeObserver = window.ResizeObserver

export const CHARS = [
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
  '1',
  '0',
  '-',
  '$',
  ',',
  '.',
]

const CHARS_INVERSE_LOOKUP = CHARS.reduce((map, cur, curIdx): {
  [key: string]: number
} => {
  map[cur] = curIdx
  return map
}, {} as { [key: string]: number })

// Given a char, which key/index is it? Fast O(1) lookup
const getIndexFromChar = (char: string): number => {
  return CHARS_INVERSE_LOOKUP[char]
}

const Number = styled.div<{ lineHeight: string | number; fontFamily: string }>`
  font-family: ${(props) => props.fontFamily};
  font-weight: 600;
  font-size: ${(props) => props.lineHeight};
  color: #0e103c;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.7px;
  line-height: ${(props) => props.lineHeight};
`

const HiddenMeasureCharsContainer = styled.div`
  position: absolute;
  user-select: none;
  visibility: hidden;
`

const AnimatedHiddenMeasureCharsContainer = a(HiddenMeasureCharsContainer)

export function addCommas(
  num: number | string,
  removeComma: boolean = false
): string {
  let sides: Array<string> = []

  sides = num.toString().split('.')
  sides[0] = removeComma
    ? sides[0]
    : sides[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return sides.join('.')
}

const numberStringToArray = (n: string) => {
  return addCommas(n).split('')
}

export interface TickerProps {
  n: string
  align?: 'left' | 'right'
  alignLeftComponentAfterNumber?: string
  fontFamily?: string
  fontSize?: number
}

interface BoundingRectMeasurement {
  left: number
  top: number
  right: number
  bottom: number
}

const RelativeContainer = styled.div<{ lineHeight: string | number }>`
  display: flex;
  width: 100%;
  height: ${(props) => props.lineHeight};
  max-height: ${(props) => props.lineHeight};
  min-height: ${(props) => props.lineHeight};
  position: relative;
  flex: 1;
`

const NumberOutsideContainer = styled.div`
  position: absolute;
  opacity: 0;
  transform: none;
`
const AnimatedNumberOutsideContainer = a(NumberOutsideContainer)

const DEFAULT_FONT_SIZE = 36

const Ticker: React.FC<TickerProps> = ({
  n,
  align = 'right',
  alignLeftComponentAfterNumber,
  fontFamily = 'Helvetica',
  fontSize = DEFAULT_FONT_SIZE,
}) => {
  const lineHeight = fontSize
  const lineHeightInPx = `${lineHeight}px`

  const [hasMeasured, setHasMeasured] = useState<boolean>(false)
  const chars = useMemo(() => (n ? numberStringToArray(n) : []), [n])

  const [bindContainerRef, { width: hiddenCharsContainerWidth }] = useMeasure()

  const [bindContainerWidthMeasure, { width: containerWidth }] = useMeasure()

  const measureCharRefs = useRef<Array<Element | null>>([])
  const [measurements, setMeasurements] = useImmer<
    Array<BoundingRectMeasurement>
  >([])
  const [resizeObservers, setResizeObservers] = useImmer<Array<ResizeObserver>>(
    []
  )

  const totalMaginParentContainer = 0
  const totalWidth = containerWidth - totalMaginParentContainer

  // Set up our measuring of available char widths  (basically configuring refs and resize observers)
  // This measures each character in our CHARS array so we can later calculate where/how to lay out a given number to a user
  useLayoutEffect(() => {
    if (measureCharRefs.current.length !== CHARS.length) {
      console.error('Mismatch with the internal text nodes measurer, bailing')
      return
    }
    if (hiddenCharsContainerWidth === 0) {
      return
    }
    CHARS.forEach((_char, idx) => {
      const ref = measureCharRefs.current[idx]
      if (!ref) {
        console.warn(
          'Undefined ref, this hints at a bigger problem (are you sure the refs are being set correctly on setup?'
        )
        return undefined
      }
      // FWIW, these shouldn't really resize often (unless font/style changes)
      const ro = new ResizeObserver(
        ([entry]: ResizeObserverEntry[]) =>
          ref &&
          setMeasurements((draft) => {
            draft[idx] = entry.contentRect
          })
      )
      setResizeObservers((draft) => {
        draft[idx] = ro
      })
      // Set initial sizes (RO doesn't guarantee to fire initially due to timings)
      setMeasurements((draft) => {
        const { left, right, bottom, top } = ref.getBoundingClientRect()
        draft[idx] = { left, right, bottom, top }
      })
      // Start the RO
      const start = () => ref && ro.observe(ref)
      start()
      return undefined
    })
    return () => {
      resizeObservers.forEach((ro) => ro.disconnect())
    }
    // Only do this on mount (note: this assumes that the nodes never change)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hiddenCharsContainerWidth])

  useLayoutEffect(() => {
    if (measurements?.[0]?.right > 0 && containerWidth > 0) {
      setHasMeasured(true)
    }
  }, [containerWidth, measurements, setHasMeasured])

  const charsWithMetadata: CharWithMetadata[] = useMemo(() => {
    const numChars = chars.length
    let runningWidth = 0

    const validAmountOfDollarSignsAndDecimals =
      chars.filter((x) => x === '$').length <= 1 &&
      chars.filter((x) => x === '.').length <= 1

    const calcuteMetadataAndPositioning = (
      char: string,
      idx: number,
      align: 'left' | 'right'
    ) => {
      const shouldAlignLeft = align === 'left'
      const lookupCharMeasurementIdx = getIndexFromChar(char)
      const measuredChar = measurements[lookupCharMeasurementIdx]
      const charWidth = measuredChar?.right - measuredChar?.left
      const lastTotalWidthCalc = runningWidth
      runningWidth = runningWidth + charWidth

      let id = `${idx}-${char}-${align}`
      // want to keep the $ static, so we fix its id so react-spring keeps it around regardless of position
      if (
        validAmountOfDollarSignsAndDecimals &&
        (char === '$' || char === '.')
      ) {
        id = char
      }
      const metadata = {
        position: numChars - idx,
        character: char,
        id: id,
        width: charWidth,
        xPosition: shouldAlignLeft
          ? lastTotalWidthCalc
          : totalWidth - runningWidth,
      }
      return metadata
    }

    const calculateAllMetadataAlignedRight = (chars: string[]) => {
      // note the reverse (to measure properly from the right),
      // then the reverse back so we can send it to react-spring in the order we want
      return chars
        .reverse()
        .map((char, idxFromLeft) =>
          calcuteMetadataAndPositioning(char, idxFromLeft, 'right')
        )
        .reverse()
    }

    const calculateAllMetadataAlignedLeft = (chars: string[]) => {
      return chars.map((char, idxFromLeft) =>
        calcuteMetadataAndPositioning(char, idxFromLeft, 'left')
      )
    }

    if (align === 'left') {
      let allMetadataLeft = calculateAllMetadataAlignedLeft(chars)
      if (alignLeftComponentAfterNumber) {
        const componentMetadata: CharWithMetadata = {
          character: alignLeftComponentAfterNumber,
          id: alignLeftComponentAfterNumber,
          position: chars.length + 1,
          width: 0,
          xPosition: runningWidth + 8,
        }
        allMetadataLeft = [...allMetadataLeft, componentMetadata]
      }
      return allMetadataLeft
    } else {
      return calculateAllMetadataAlignedRight(chars)
    }
  }, [chars, align, measurements, totalWidth, alignLeftComponentAfterNumber])

  const transitionRef = useRef<SpringHandle>(null)

  const from = useCallback((metadata: CharWithMetadata) => {
    return {
      opacity: 0,
      transform: `translate3d(${metadata.xPosition}px, 0, 0)`,
      scale: `scale3d(0.5, 0.5, 1)`,
    }
  }, [])

  const enter = useCallback((metadata: CharWithMetadata) => {
    return {
      opacity: 1,
      transform: `translate3d(${metadata.xPosition}px, 0, 0)`,
      scale: `scale3d(1, 1, 1)`,
    }
  }, [])

  const leave = useCallback((metadata: CharWithMetadata) => {
    return {
      opacity: 0,
      transform: `translate3d(${metadata.xPosition}px, 0, 0)`,
      scale: `scale3d(0.5, 0.5, 1)`,
    }
  }, [])

  const update = useCallback((metadata: CharWithMetadata) => {
    return {
      opacity: 1,
      transform: `translate3d(${metadata.xPosition}px, 0, 0)`,
      scale: `scale3d(1, 1, 1)`,
    }
  }, [])

  const transitions = useTransition(
    hasMeasured ? charsWithMetadata : charsWithMetadata,
    {
      ref: transitionRef,
      initial: false,
      reset: !hasMeasured,
      keys: (x: CharWithMetadata) => x.id,
      from: from,
      enter: enter,
      leave: leave,
      update: update,
      config: { ...config.stiff, clamp: true }, //{ mass: 5, tension: 500, friction: 100, clamp: true  },
      trail: 45,
    }
  )

  useChain([transitionRef], [0] /*1000*/)

  return (
    <>
      <AnimatedHiddenMeasureCharsContainer
        {...bindContainerRef}
        key={'measure-chars'}
        aria-hidden={'true'}
      >
        {CHARS.map((char, idx) => {
          return (
            <Number
              fontFamily={fontFamily}
              lineHeight={lineHeightInPx}
              key={char}
            >
              {/* Attach to the span to measure inline height (not on div, because it's a block element) */}
              <span ref={(el) => (measureCharRefs.current[idx] = el)}>
                {char}
              </span>
            </Number>
          )
        })}
      </AnimatedHiddenMeasureCharsContainer>
      <AnimatedAbsoluteFillContainer {...bindContainerWidthMeasure} />
      {hasMeasured && (
        <RelativeContainer lineHeight={lineHeightInPx}>
          {transitions((props, item) => {
            return (
              <AnimatedNumberOutsideContainer
                key={item.id}
                style={{
                  opacity: props.opacity,
                  transform: props.transform,
                }}
              >
                <AnimatedNumberContainer style={{ transform: props.scale }}>
                  <Number fontFamily={fontFamily} lineHeight={lineHeightInPx}>
                    {item.character}
                  </Number>
                </AnimatedNumberContainer>
              </AnimatedNumberOutsideContainer>
            )
          })}
          <Number fontFamily={fontFamily} lineHeight={lineHeightInPx}></Number>
        </RelativeContainer>
      )}
    </>
  )
}

const NumberContainer = styled.div`
  position: absolute;
  will-change: transform;
`

const AnimatedNumberContainer = a(NumberContainer)

const AbsoluteFillContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
`
const AnimatedAbsoluteFillContainer = a(AbsoluteFillContainer)

export interface CharWithMetadata {
  position: number // index in the lookup
  character: string
  id: string
  width: number
  xPosition: number
}

export { Ticker }
