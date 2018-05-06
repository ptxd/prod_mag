import React, { Component } from 'react'
import MobileToggle from './header/mobile_toggle';
import LogoHeader from './header/logo_header';
import SearchBar from './header/searchbar';
import SearchForm from './header/search_form';
import AdBanner from './ads/ad_banner_header';

class Header extends Component {
    render () {
        return (
            <div className="header">
                <div className="container">
                    <div className="flex-parent align-items-center">
                        <LogoHeader/>
                        <SearchForm/>
                        <MobileToggle/>
                        <SearchBar/>
                        <AdBanner/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header