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
                              <a href="categories.html" className="entry__meta-category">ICO</a>
                              <h3 className="widget-popular-posts__entry-title">
                                <a href="single-post.html">Bitcoin Fees: Possible Solutions and Scenarios</a>
                              </h3>
                            </div>
                          </article>
                        </li>
                        <li className="widget-popular-posts__item">
                          <article>
                            <div className="widget-popular-posts__entry">
                              <a href="categories.html" className="entry__meta-category">mining</a>
                              <h3 className="widget-popular-posts__entry-title">
                                <a href="single-post.html">Bitcoin Fees: Possible Solutions and Scenarios</a>
                              </h3>
                            </div>
                          </article>
                        </li>
                        <li className="widget-popular-posts__item">
                          <article>
                            <div className="widget-popular-posts__entry">
                              <a href="categories.html" className="entry__meta-category">mining</a>
                              <h3 className="widget-popular-posts__entry-title">
                                <a href="single-post.html">Bitcoin Fees: Possible Solutions and Scenarios</a>
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