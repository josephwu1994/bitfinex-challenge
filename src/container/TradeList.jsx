import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles/tradeList.css'
import TradeListItem from './../component/TradeListItem'

class TradeList extends Component {
  render() {
    const tradeList = this.props.tradeArr.map(tradeData => (
      <TradeListItem data={tradeData} key={tradeData}/>
    ))
    return (
      <div className="tradeListContainer">
        <div className="title">
          <div className="tradeTitleText">TIME</div>
          <div className="tradeTitleText">PRICE</div>
          <div className="tradeTitleText">AMOUNT</div>
        </div>
        {tradeList}
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  tradeArr: store.reducers.trades
})

export default connect(mapStateToProps, null)(TradeList);
