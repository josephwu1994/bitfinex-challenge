import React, { Component } from 'react'
import { Collapse } from 'react-bootstrap';
import { FaAngleRight, FaAngleDown } from 'react-icons/lib/fa'

import './styles/orderBook.css'
import Buy from './../container/Buy'
import Sell from './../container/Sell'

export default class OrderBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  render() {
    const { open } = this.state;
    return (
      <div className="orderBook">
        <div className="switch"
          onClick={() => this.setState({ open: !open })}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          {this.state.open ? <FaAngleDown size={40} color={'grey'} /> : <FaAngleRight  size={40} color={'#grey'}/>}
          ORDER BOOK <span className="tickerText"> BTC/USD </span>
        </div>
        <Collapse in={this.state.open}>
          <div className="orderBookContainer" id="example-collapse-text">
            <Buy />
            <Sell />
          </div>
        </Collapse>
      </div>
    );
  }
}