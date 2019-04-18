import React, { Component } from 'react'

import './styles/sell.css'
import SellOrder from './../component/SellOrder'

export default class Sell extends Component {
  render() {
    return (
      <div className="sellContainer">
        <div className="title">
          <div className="titleText">PRICE</div>
          <div className="titleText">TOTAL</div>
          <div className="titleText">AMOUNT</div>
          <div className="titleText">COUNT</div>
        </div>
        <SellOrder />
      </div>
    )
  }
}
