import React, { Component } from 'react'
import './styles/main.css'

import OrderBook from './OrderBook'
import Trades from './Trades'

export default class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <OrderBook />
        <Trades />
      </div>
    )
  }
}
