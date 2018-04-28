import React, { Component } from 'react'

class Ticker extends Component {
    render () {
        return (
            <div class="ticker d-none d-lg-block">
                <div class="ticker__list crypto-rates marquee" data-duration="60000" data-direction="left"></div>
            </div>
        )
    }
}

export default Ticker