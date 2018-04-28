import React, { Component } from 'react'
import FeaturedPosts from './contents/featured_posts';
import HotNews from './contents/hot_news';
import RecentNews from './contents/recent_news';
import CryptoRates from './contents/crypto_rates';
import WidgetFeaturedICO from './contents/widget_featured_ico';

class Content extends Component {
    render () {
        return (
            // <!-- Content -->      
            <section class="section-wrap main-content">
              <div class="container">
                <div class="row">
        
                  {/* <!-- Posts --> */}
                  <div class="col-lg-8 blog__content mb-30">
        
                    {/* <!-- Featured Post --> */}
                    <FeaturedPosts/>
        
                    {/* <!-- Hot News --> */}
                    <HotNews/>
        
                    {/* <!-- Recent News --> */}
                    <RecentNews/>
        
                  </div> 
                  {/* <!-- end posts --> */}
        
                  <!-- Sidebar -->
                  <aside class="col-lg-4 sidebar sidebar--right">
        
                    <!-- Widget Crypto Rates -->
                    <CryptoRates/>
        
                    <!-- Widget Featured ICO's -->
                    <WidgetFeaturedICO/>
        
                    <!-- Widget Socials -->
                    <div class="widget widget-socials">
                      <div class="socials justify-content-center">
                        <a class="social social-facebook" href="#" title="facebook" target="_blank" aria-label="facebook">
                          <i class="ui-facebook"></i>
                        </a><!--
                        --><a class="social social-twitter" href="#" title="twitter" target="_blank" aria-label="twitter">
                          <i class="ui-twitter"></i>
                        </a><!--
                        --><a class="social social--nobase" href="#" target="_blank" aria-label="telegram" style="padding-top:6px;">
                          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" class=""></path></svg></i>
                        </a><!--
                        --><a class="social social-instagram" href="#" title="instagram" target="_blank" aria-label="instagram">
                          <i class="ui-instagram"></i>
                        </a><!--
                        --><a class="social social-youtube" href="#" title="youtube" target="_blank" aria-label="youtube">
                          <i class="ui-youtube"></i>
                        </a><!--
                        --><a class="social social-rss" href="#" title="rss" target="_blank" aria-label="rss">
                          <i class="ui-rss"></i>
                        </a>
                      </div>
                    </div> <!-- end widget socials -->
        
                    <!-- Widget Newsletter -->
                    <div class="widget widget_mc4wp_form_widget">
                      <h4 class="widget-title">Subscribe for News</h4>
                      <form class="mc4wp-form" action="http://localhost:3000/subscribe" method="POST" onsubmit="alert('Thank You For Subscribing!');return false">
                        <div class="mc4wp-form-fields">
                          <div class="form-group">
                            <i class="ui-email"></i>
                            <input type="email" name="EMAIL" placeholder="Your email" required="">
                          </div>
                          <input type="submit" class="btn btn-md btn-color" value="submit">
                        </div>
                      </form>
                    </div> <!-- end widget newsletter -->
                    <script>
                      
                    </script>
                    
                    
        
                    <!-- Widget Popular Posts -->
                    <div class="widget widget-popular-posts">
                      <h4 class="widget-title">Popular Posts</h4>
        
                      <ul class="widget-popular-posts__list">
                        <li class="widget-popular-posts__item">
                          <article>
                            <div class="widget-popular-posts__entry">
                              <a href="categories.html" class="entry__meta-category">ICO</a>
                              <h3 class="widget-popular-posts__entry-title">
                                <a href="single-post.html">Bitcoin Fees: Possible Solutions and Scenarios</a>
                              </h3>
                            </div>
                          </article>
                        </li>
                        <li class="widget-popular-posts__item">
                          <article>
                            <div class="widget-popular-posts__entry">
                              <a href="categories.html" class="entry__meta-category">mining</a>
                              <h3 class="widget-popular-posts__entry-title">
                                <a href="single-post.html">Bitcoin Fees: Possible Solutions and Scenarios</a>
                              </h3>
                            </div>
                          </article>
                        </li>
                        <li class="widget-popular-posts__item">
                          <article>
                            <div class="widget-popular-posts__entry">
                              <a href="categories.html" class="entry__meta-category">mining</a>
                              <h3 class="widget-popular-posts__entry-title">
                                <a href="single-post.html">Bitcoin Fees: Possible Solutions and Scenarios</a>
                              </h3>
                            </div>
                          </article>
                        </li>
                      </ul>
                    </div> <!-- end widget popular posts -->
        
                  </aside> <!-- end sidebar -->
        
                </div> <!-- end row -->
              </div> <!-- end container -->
            </section> <!-- end content -->
        )
    }
}

export default Content