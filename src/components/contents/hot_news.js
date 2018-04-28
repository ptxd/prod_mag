import React, { Component } from 'react'

class HotNews extends Component {
    render () {
        return (
                <section className="section">
                      <h3 className="section-title h2">Hot News</h3>
                      <div className="row">
                        <div className="col-md-6">
                          <article className="entry">
                            <a href="categories.html" className="entry__meta-category">Crypto Markets</a>
                            <div className="entry__img-holder">
                              <a href="single-post.html">
                                <div className="thumb-container thumb-75">
                                  <img data-src="img/blog/post_1.jpg" src="img/empty.png" className="entry__img lazyload" alt="" />
                                </div>
                              </a>
                            </div>
        
                            <div className="entry__body">
                              <div className="entry__header">
                                <h2 className="entry__title entry__title--medium">
                                  <a href="single-post.html">Rising Price of Cryptocurrencies: Why Does It Happen</a>
                                </h2>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div className="col-md-6">
                          <article className="entry">
                            <a href="categories.html" className="entry__meta-category">ICO</a>
                            <div className="entry__img-holder">
                              <a href="single-post.html">
                                <div className="thumb-container thumb-75">
                                  <img data-src="img/blog/post_2.jpg" src="img/empty.png" className="entry__img lazyload" alt="" />
                                </div>
                              </a>
                            </div>
        
                            <div className="entry__body">
                              <div className="entry__header">                        
                                <h2 className="entry__title entry__title--medium">
                                  <a href="single-post.html">ERC20 Code Contract Bug – Does It Affect You?</a>
                                </h2>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div> 
                    </section>
        )
    }
}

export default HotNews