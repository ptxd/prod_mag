import React, { Component } from 'react'
import FeaturedPosts from './contents/featured_posts';
import HotNews from './contents/hot_news';
import RecentNews from './contents/recent_news';
import WidgetCryptoRates from './contents/crypto_rates';
import WidgetFeaturedICO from './contents/widget_featured_ico';
import WidgetSocials from './contents/widget_socials';
import WidgetNewsletter from './contents/widget_newsletter';
import WidgetPopularPosts from './contents/widget_popular_posts';

class Content extends Component {
    render () {
        return (
            // <!-- Content -->      
            <section class="section-wrap main-content">
              <div class="container">
                <div class="row">
        
                  {/* <!-- Posts --> */}
                  <div class="col-lg-8 blog__content mb-30">
                    <FeaturedPosts/>
                    <HotNews/>
                    <RecentNews/>
                  </div> 
                  {/* <!-- end posts --> */}
        
                  {/* <!-- Sidebar --> */}
                  <aside class="col-lg-4 sidebar sidebar--right">
                    <WidgetCryptoRates/>
                    <WidgetFeaturedICO/>
                    <WidgetSocials/>
                    <WidgetNewsletter/>
                    <WidgetPopularPosts/>
                  </aside> 
                {/* !-- end sidebar --> */}
                </div> 
                {/* <!-- end row --> */}
              </div> 
              {/* <!-- end container --> */}
            </section> 
        )
    }
}

export default Content