import React, { Component } from 'react'
import PlaceholderLeaderBoard from '../../img/Banner Ads/guild-banner-img.png'

class AddBanner extends Component {
    render () {
        return (
            <div className="header__ad text-center d-lg-block d-none">
                <a href="#">
                    <img src={PlaceholderLeaderBoard} alt=""/>
                </a>
            </div>
        )
    }
}

export default AddBanner