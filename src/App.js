import React, { Component } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'
import './App.css'

import Ticker from './component/Ticker'
import Main from './view/Main'
import { updateTicker, updateOrderBook, updateTrades } from './actions'

class App extends Component {
  componentDidMount() {
    const socket = io('wss://api-pub.bitfinex.com/ws/2', {
      "force new connection" : true,
      reconnectionAttempts: 'Infinity',
      timeout : 10000,
      secure: 'secure',
      transports : ['websocket']
    })
    socket.on('open', () => {
      socket.send({
        event: 'subscribe',
        channel: 'ticker',
        symbol: 'tBTCUSD'
      }, (data) => {
        console.log(data)
        this.props.updateTicker(data)
      })
    })

  }

  render() {
    return (
      <div className="App">
        <Ticker data={this.props.tickerData}/>
        <Main />
      </div>
    )
  }
}
const mapStateToProps = (store) => ({
  tickerData: store.reducers.ticker
})

const mapDispatchToProps = (dispatch) => ({
  updateTicker : (data) => { dispatch(updateTicker(data))},
  updateOrderBook : (data) => {dispatch(updateOrderBook(data))},
  updateTrades : (data) => {dispatch(updateTrades(data))}
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
