import React, { Component } from 'react'

class FeaturedPosts extends Component {
    render () {
        return (
                <article className="entry">
                    <div className="thumb-bg-holder thumb-container thumb-65">
                        <img data-src="https://cdn.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769_960_720.jpg" src="https://cdn.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769_960_720.jpg" className="lazyload" alt=""/>
                        <a href="single-post.html" className="thumb-url"></a>
                        <div className="bottom-gradient"></div>
                    </div>
        
                    <div className="thumb-text-holder">
                        <a href="single-post.html" className="entry__meta-category">The Guild</a>   
                        <h1 className="thumb-entry-title">
                            <a href="single-post.html">To the rebels</a>
                        </h1>
                    </div>
                </article>
        )
    }
}

export default FeaturedPosts;