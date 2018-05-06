import React, { Component } from 'react'
import Preloader from '../components/preloader';
import BgOverlay from '../components/bg_overlay';
// import SideNav from '../components/sidenav';
import SubscribeModal from '../components/subscribe_modal';
import Ticker from '../components/ticker';
import Header from '../components/header';
import Navigation from '../components/navigation';
import Content from '../components/content';
import Videos from '../components/videos';
import AddBannerSection from '../components/ads/add_banner_section';
import NewsCategories from '../components/news_categories';
import ApplicationForm from '../components/newsletters';
import Footer from '../components/footer';

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
                    <Content/>
                    <Videos/>
                    <AddBannerSection/>
                    <NewsCategories/>
                    <ApplicationForm/>
                    <Footer/>
                </main> 
            </div>
        )
    }
}

export default Home