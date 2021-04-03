import { useRef, useState, useEffect, useMemo } from 'react'
const ResizeObserver = window.ResizeObserver
/**
 *   const [bind, { width }] = useMeasure()
 *   <div {...bind}>...<div/>
 */
function useMeasure<T extends Element>() {
  const ref = useRef<T>()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [element, setElement] = useState<T | undefined>(ref.current)

  // Check every render but only trigger reinitialization when ref value changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (ref.current !== element) {
      setElement(ref.current)
    }
  })

  const ro = useMemo(
    () =>
      new ResizeObserver(
        ([entry]: ResizeObserverEntry[]) => element && set(entry.contentRect)
      ),
    [element]
  )

  useEffect(
    () => (
      // eslint-disable-next-line no-sequences
      element && ro.observe(element),
      () => {
        element && ro.disconnect()
      }
    ),
    [ro, element]
  )
  return [{ ref }, bounds] as const
}

export { useMeasure }
