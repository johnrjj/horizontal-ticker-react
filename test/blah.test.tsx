import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Ticker } from '../src'

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Ticker n={'$123.45'} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
