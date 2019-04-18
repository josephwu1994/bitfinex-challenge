import React, { Component } from 'react'
import { Collapse } from 'react-bootstrap';
import { FaAngleRight, FaAngleDown } from 'react-icons/lib/fa'

import './styles/trade.css'
import TradeList from './../container/TradeList'

export default class Trades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  render() {
    const { open } = this.state;
    return (
      <div className="trade">
        <div className="switch"
          onClick={() => this.setState({ open: !open })}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          {this.state.open ? <FaAngleDown size={40} color={'grey'} /> : <FaAngleRight  size={40} color={'#grey'}/>}
          TRADES <span className="tickerText"> BTC/USD </span>
        </div>
        <Collapse in={this.state.open}>
          <div className="tradeContainer" id="example-collapse-text">
            <TradeList />
          </div>
        </Collapse>
      </div>
    );
  }
}
