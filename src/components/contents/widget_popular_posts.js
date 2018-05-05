import React, { Component } from 'react'

class WidgetPopularPosts extends Component {
    render () {
        return (    
                    <div className="widget widget-popular-posts">
                      <h4 className="widget-title">Popular Posts</h4>
                      <ul className="widget-popular-posts__list">
                        <li className="widget-popular-posts__item">
                          <article>
                            <div className="widget-popular-posts__entry">
                              <a href="categories.html" className="entry__meta-category">Ethereum</a>
                              <h3 className="widget-popular-posts__entry-title">
                                <a href="https://blockgeeks.com/guides/ethereum-casper/" target="_blank">A Crash Course To Ethereum's Casper Protocol</a>
                              </h3>
                            </div>
                          </article>
                        </li>
                        <li className="widget-popular-posts__item">
                          <article>
                            <div className="widget-popular-posts__entry">
                              <a href="categories.html" className="entry__meta-category">mining</a>
                              <h3 className="widget-popular-posts__entry-title">
                                <a href="https://www.techradar.com/news/best-mining-gpu" target="_blank">The best graphics cards for mining Ethereum and more</a>
                              </h3>
                            </div>
                          </article>
                        </li>
                        <li className="widget-popular-posts__item">
                          <article>
                            <div className="widget-popular-posts__entry">
                              <a href="categories.html" className="entry__meta-category">ICO</a>
                              <h3 className="widget-popular-posts__entry-title">
                                <a href="https://www.cnbc.com/2018/05/02/sec-official-urges-caution-on-icos.html" target="_blank">SEC Officials: Many so called "initial coin offerings" are in fact securities offering</a>
                              </h3>
                            </div>
                          </article>
                        </li>
                      </ul>
                    </div> 
        )
    }
}

export default WidgetPopularPosts