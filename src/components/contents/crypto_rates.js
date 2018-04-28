import React, { Component } from 'react'

class CryptoRates extends Component {
    render () {
        return (
            <div className="widget widget-crypto-rates">
                <h4 className="widget-title">Cryptocurrency Prices</h4>
                <div className="crypto-rates" id="crypto-rates"></div>
            </div>
        )
    }
}

export default CryptoRates