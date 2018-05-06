import React, { Component } from 'react'

class Subscribe extends Component {
    render () {
        return (
            <div className="nav__right-item nav__subscribe">
                <a href="#" className="nav__subscribe-url" data-toggle="modal" data-target="#subscribe-modal">Subscribe</a>
            </div>
        )
    }
}

export default Subscribe