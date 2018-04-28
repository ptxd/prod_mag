import React, { Component } from 'react'
import Preloader from '../components/preloader';
import BgOverlay from '../components/bg_overlay';
// import SideNav from '../components/sidenav';
import SubscribeModal from '../components/subscribe_modal';
import Ticker from '../components/ticker';
import Header from '../components/header';
import Navigation from '../components/navigation';

class Home extends Component {
    render () {
        return (
            <div>
                <Preloader/>
                <BgOverlay/>
                <SubscribeModal/>
                {/* <SideNav/> */}
                <main className="main oh" id="main">
                    <Ticker/>
                    <Header/>
                    <Navigation/>
                </main> 
            </div>
        )
    }
}

export default Home