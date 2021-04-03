import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useCallback, useEffect, useState } from 'react'
import { useMedia } from 'react-use'
import styled from 'styled-components'
import { Ticker } from '../.'
import './index.css'

const PageContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #e8ecfd;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
`

const Container = styled.div`
  font-family: 'Avenir';
  position: relative;
  max-width: 640px;
  width: 100%;
  padding: 16px;
  background-color: #fff;
  margin-bottom: 36px;
  border-radius: 8px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
`

// Rotate through some example values
const txCounts = [
  '101',
  '102',
  '105',
  '115',
  '205',
  '215',
  '216',
  '237',
  '223',
  '314',
]

const accountBalances = [
  '$2376.41',
  '$946.00',
  '$542.75',
  '$352.32',
  '$752.31',
  '$842.45',
  '$1276.41',
  '$1386.51',
  '$1286.87',
]

const STARTING_INDEX = 0

function App() {
  const isMobile = useMedia('(max-width: 768px)')

  const [autoRefresh, setAutoRefresh] = useState<boolean>(true)

  const [curIndex, setCurIndex] = useState<number>(STARTING_INDEX)

  const [accountBalance, setAccountBalance] = useState<string>(
    accountBalances[STARTING_INDEX]
  )
  const [stagedAccountBalance, setStagedAccountBalance] = useState('836.39')

  const [txCount, setTxCount] = useState<string>(txCounts[STARTING_INDEX])
  const [stagedTxCount, setStagedTxCount] = useState('105')

  useEffect(() => {
    if (!autoRefresh) {
      return
    }
    const interval = setInterval(() => {
      setCurIndex((prev) => (prev + 1) % accountBalances.length)
    }, 4000)
    return () => {
      clearInterval(interval)
    }
  }, [autoRefresh])

  useEffect(() => {
    const curTxCount = txCounts[curIndex]
    const curAccountBalance = accountBalances[curIndex]

    setTxCount(curTxCount)
    setAccountBalance(curAccountBalance)
  }, [curIndex])

  const commitStagedValues = useCallback(() => {
    const clean = (s: string) => s.replace(',', '').trim()
    const cleanTxCount = clean(stagedTxCount)
    const cleanAccountBalance = `$${clean(stagedAccountBalance)}`

    setTxCount(cleanTxCount)
    setAccountBalance(cleanAccountBalance)
  }, [stagedAccountBalance, stagedTxCount])

  return (
    <div className="App">
      <div></div>

      <PageContainer>
        <H1>Horizontal Ticker</H1>

        <Container>
          {/* <div style={{ marginBottom: 4}}>Avenir</div> */}
          <TickerRow>
            <div style={{ display: 'flex', flex: 1, position: 'relative' }}>
              <Ticker
                align={'left'}
                n={txCount}
                alignLeftComponentAfterNumber={' transactions'}
              />
            </div>
            <div style={{ display: 'flex', flex: 1, position: 'relative' }}>
              <Ticker
                fontFamily={'Avenir'}
                fontSize={36}
                n={accountBalance}
                align={isMobile ? 'left' : 'right'}
              />
            </div>
          </TickerRow>
          {/* <div style={{ fontFamily: "Futura", marginBottom: 4}}>Futura</div> */}
          <TickerRow>
            <div style={{ display: 'flex', flex: 1, position: 'relative' }}>
              <Ticker
                fontFamily={'Futura'}
                fontSize={32}
                align={'left'}
                n={txCount}
                alignLeftComponentAfterNumber={' transactions'}
              />
            </div>
            <div style={{ display: 'flex', flex: 1, position: 'relative' }}>
              <Ticker
                fontFamily={'Futura'}
                fontSize={32}
                n={accountBalance}
                align={isMobile ? 'left' : 'right'}
              />
            </div>
          </TickerRow>
          <TickerRow style={{ marginBottom: 0 }}>
            <div style={{ display: 'flex', flex: 1, position: 'relative' }}>
              <Ticker
                fontFamily={'Helvetica'}
                fontSize={32}
                align={'left'}
                n={txCount}
                alignLeftComponentAfterNumber={' transactions'}
              />
            </div>
            <div style={{ display: 'flex', flex: 1, position: 'relative' }}>
              <Ticker
                fontFamily={'Helvetica'}
                fontSize={32}
                n={accountBalance}
                align={isMobile ? 'left' : 'right'}
              />
            </div>
          </TickerRow>
        </Container>

        <form
          style={{
            marginTop: 32,
          }}
          onSubmit={(e) => {
            e.preventDefault()
            commitStagedValues()
          }}
        >
          <FlexLeftRight>
            <label style={{ fontWeight: 700 }}>test custom values</label>
          </FlexLeftRight>
          <FlexLeftRight>
            <label style={{ padding: 4 }}>tx count</label>
            <input
              type={'number'}
              step="any"
              value={stagedTxCount}
              onChange={(e) => setStagedTxCount(e.target.value)}
            />
          </FlexLeftRight>
          <FlexLeftRight>
            <label style={{ padding: 4 }}>account balance</label>
            <input
              type={'number'}
              step="any"
              value={stagedAccountBalance}
              onChange={(e) => setStagedAccountBalance(e.target.value)}
            />
          </FlexLeftRight>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              style={{ fontFamily: 'Avenir' }}
              type={'submit'}
              onClick={() => commitStagedValues()}
            >
              update values
            </button>
          </div>
          <FlexLeftRight style={{ marginTop: 16 }}>
            <label style={{ padding: 4 }}>auto-change values</label>
            <input
              type={'checkbox'}
              step="any"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
            />
          </FlexLeftRight>
        </form>
      </PageContainer>
    </div>
  )
}

const FlexLeftRight = styled.div`
  font-family: 'Avenir';
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`

const TickerRow = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const H1 = styled.h1`
  font-size: 24px;
  font-family: 'Avenir';
  font-weight: 300;
  margin-bottom: 16px;
`

ReactDOM.render(<App />, document.getElementById('root'))
