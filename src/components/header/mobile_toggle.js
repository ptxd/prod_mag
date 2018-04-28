import React, { Component } from 'react'

class MobileToggle extends Component {
    render () {
        return (
        <button className="nav-icon-toggle d-lg-none" id="nav-icon-toggle" aria-label="Open side menu">
            <span className="nav-icon-toggle__box">
                <span className="nav-icon-toggle__inner"></span>
            </span>
        </button> 
        )
    }
}

export default MobileToggle