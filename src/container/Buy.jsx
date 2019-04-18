import React, { Component } from 'react'

import './styles/buy.css'
import BuyOrder from './../component/BuyOrder'


export default class Buy extends Component {
  render() {
    return (
      <div className="buyContainer">
        <div className="title">
          <div className="titleText">COUNT</div>
          <div className="titleText">AMOUNT</div>
          <div className="titleText">TOTAL</div>
          <div className="titleText">PRICE</div>
        </div>
        <BuyOrder />
      </div>
    )
  }
}
