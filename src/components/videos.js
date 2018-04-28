import React, { Component } from 'react'

class Videos extends Component {
    render () {
        return (
            <section className="section-wrap pt-50 bg-dark">
                <div className="container">
                    <h3 className="section-title h2 white">Videos</h3>
                    <div className="row">
                        <div className="col-lg-8">
                            <article className="entry">
                                <a href="single-post.html" className="entry__meta-category">investment</a>
                                <div className="entry__img-holder thumb-container thumb-60">
                                <img data-src="https://www.youtube.com/watch?v=ZE2HxTmxfrI" src="https://www.youtube.com/watch?v=ZE2HxTmxfrI" className="entry__img lazyload" alt=""/>
                                <a href="single-post.html" className="thumb-url"></a>
                                <a href="#" className="play-btn"></a>
                                </div>
                
                                <div className="entry__body">
                                <div className="entry__header">
                                    <h2 className="entry__title entry__title--large">
                                    <a href="single-post.html">Blockchain-based Mobile Payments Service Developed by Gates Foundation</a>
                                    </h2>
                                </div>
                                </div>
                            </article>
                        </div>
            
                        <div className="col-lg-4 video-col--small">
                            <article className="entry">
                                <a href="single-post.html" className="entry__meta-category">investment</a>
                                <div className="entry__img-holder thumb-container thumb-60">
                                <img data-src="img/blog/video_2.jpg" src="img/empty.png" className="entry__img lazyload" alt=""/>
                                <a href="single-post.html" className="thumb-url"></a>
                                </div>
                
                                <div className="entry__body">
                                <div className="entry__header">
                                    <h2 className="entry__title">
                                    <a href="single-post.html">Bitcoin Fees: Possible Solutions and Scenarios</a>
                                    </h2>
                                </div>
                                </div>
                            </article>
                            <article className="entry">
                                <a href="single-post.html" className="entry__meta-category">investment</a>
                                <div className="entry__img-holder thumb-container thumb-60">
                                <img data-src="img/blog/video_3.jpg" src="img/empty.png" className="entry__img lazyload" alt=""/>
                                <a href="single-post.html" className="thumb-url"></a>
                                </div>
                
                                <div className="entry__body">
                                <div className="entry__header">
                                    <h2 className="entry__title">
                                    <a href="single-post.html">Bitcoin Fees: Possible Solutions and Scenarios</a>
                                    </h2>
                                </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>      
            </section> 
        )
    }
}

export default Videos