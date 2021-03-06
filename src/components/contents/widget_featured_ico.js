import React, { Component } from 'react'
import Monetha from '../../img/blog/ico_2.png';
import ClearCoin from '../../img/blog/ico_1.png';
import HelloGold from '../../img/blog/ico_3.png';

class WidgetFeaturedICO extends Component {
    render () {
        return (
            <div className="widget widget-featured-icos">
                <h4 className="widget-title">Featured ICO's</h4>
                <ul className="widget-featured-icos__list">
                <li className="widget-featured-icos__item">
                    <a href="#" className="widget-featured-icos__url">
                    <img src={ClearCoin} alt="" />
                    <span className="widget-featured-icos__title">ClearCoin</span>
                    <span className="widget-featured-icos__launch">Starts in:</span>
                    <span className="widget-featured-icos__time">60 days</span>
                    </a>
                </li>
                <li className="widget-featured-icos__item">
                    <a href="#" className="widget-featured-icos__url">
                    <img src={Monetha} alt=""/>
                    <span className="widget-featured-icos__title">Monetha</span>
                    <span className="widget-featured-icos__launch">Starts in:</span>
                    <span className="widget-featured-icos__time">12 days</span>
                    </a>
                </li>
                <li className="widget-featured-icos__item">
                    <a href="#" className="widget-featured-icos__url">
                    <img src={HelloGold} alt=""/>
                    <span className="widget-featured-icos__title">HelloGold</span>
                    <span className="widget-featured-icos__launch">Starts in:</span>
                    <span className="widget-featured-icos__time">3 days</span>
                    </a>
                </li>
                </ul>
            </div> 
        )
    }
}

export default WidgetFeaturedICO