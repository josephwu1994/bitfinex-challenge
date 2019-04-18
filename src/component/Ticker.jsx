import React, { Component } from 'react'
import './styles/ticker.css'

export default class Ticker extends Component {

  render() {
    const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const data = this.props.data
    const totalVol = Number.parseFloat(data[6]*data[7]).toFixed()
    const high = data[data.length-2]
    const low = data[data.length-1]
    const dailyChange = Number.parseFloat(data[4]).toFixed(2)
    const changeColor = data[5] < 0 ? {color: 'red'} : {color: 'rgba(136, 218, 81, 0.788)'}
    return (
      <div className="tickerContainer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="72" height="72" viewBox="0 0 24 24"><path d="M11 24v-3.022h-1v3.022h-2v-3.022h-4.969l.5-2.978h1.079c.884 0 1.39-.851 1.39-1.707v-8.889c0-.833-.485-1.404-1.365-1.404h-1.635v-3h5v-3h2v3h1v-3h2v3.053c4.315.146 6.024 1.781 6.514 3.625.58 2.18-.857 4.01-2.093 4.456 1.501.382 3.579 1.491 3.579 4.05 0 3.483-2.688 5.816-8 5.816v3h-2zm-1-11.006v5.006c3.969 0 6.688-.375 6.688-2.516 0-2.296-2.938-2.49-6.688-2.49zm0-1.994c2.211 0 5.578-.156 5.578-2.5 0-2-2.078-2.5-5.578-2.5v5z"/></svg>
        <div className="contentContainer">
          <div className="content"><span style={{fontSize: '1.5rem', color: 'white'}}>BTC/USD</span></div>
          <div className="content">VOL <span style={{textDecoration: 'underline'}}>{numberWithCommas(totalVol)}</span> USD</div>
          <div className="content">LOW <span style={{color: 'white'}}>{numberWithCommas(low)}</span></div>
        </div>
        <div className="contentContainer" >
          <div className="content"><span style={{fontSize: '1.5rem', color: 'white'}}>{numberWithCommas(data[0])}</span></div>
          <div className="content"><span style={changeColor}>{`${dailyChange} (${data[5]*100}%)`}</span></div>
          <div className="content">HIGH <span style={{color: 'white'}}>{numberWithCommas(high)}</span></div>
        </div>
      </div>
    )
  }
}
