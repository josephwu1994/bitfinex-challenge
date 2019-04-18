import React, { Component } from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/lib/fa'

import './styles/tradeListItem.css'


export default class TradeListItem extends Component {
  render() {
    const date = new Date(this.props.data[0])
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    const color = this.props.data[2] > 0 ? 'rgba(136, 218, 81, 0.1)' : 'rgba(255, 0, 0, 0.1)'
    return (
      <div className="tradeListItem" style={{backgroundColor: color}}>
        {this.props.data[2] > 0 ? <FaAngleUp size={24} color='rgba(136, 218, 81, 0.788)'/> : <FaAngleDown size={24} color='red'/>}
        <div className="tradeTitleText">{time}</div>
        <div className="tradeTitleText">{Number.parseFloat(this.props.data[3]).toFixed(1)}</div>
        <div className="tradeTitleText">{Number.parseFloat(Math.abs(this.props.data[2])).toFixed(4)}</div>
      </div>
    )
  }
}
