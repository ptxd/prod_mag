import React, { Component } from 'react'
import YouTube from 'react-youtube';

class Videos extends Component {
    render () {
        const opts = {
            height: '500px',
            width: '805px',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 0
            }
          };
          const opts2 = {
            height: '175px',
            width: '295px',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 0
            }
          };
        return (
            <section className="section-wrap pt-50 bg-dark">
                <div className="container">
                    <h3 className="section-title h2 white">Videos</h3>
                    <div className="row">
                        <div className="col-lg-8">
                            <article className="entry">
                                <a href="single-post.html" className="entry__meta-category">Blockchain</a>
                                <div className=" thumb-container">
                                <YouTube
                                    videoId="hYip_Vuv8J0"
                                    opts={opts}
                                    onReady={this._onReady}
                                />
                                </div>
                
                                <div className="entry__body">
                                <div className="entry__header">
                                    <h2 className="entry__title entry__title--large">
                                    <a href="single-post.html">Blockchain Video For Dummies: Temporary Filler Really Till We Find a Better Video</a>
                                    </h2>
                                </div>
                                </div>
                            </article>
                        </div>
            
                        <div className="col-lg-4 video-col--small">
                            <article className="entry">
                                <a href="single-post.html" className="entry__meta-category">ICO</a>
                                <div className="thumb-container">
                                <YouTube
                                    videoId="sqcN8WS61CI"
                                    opts={opts2}
                                    onReady={this._onReady}
                                />
                                </div>
                
                                <div className="entry__body">
                                <div className="entry__header">
                                    <h2 className="entry__title">
                                    <a href="single-post.html">ERC20 Buffer Overflow: Explained By A Dev</a>
                                    </h2>
                                </div>
                                </div>
                            </article>
                            <article className="entry">
                                <a href="single-post.html" className="entry__meta-category">ICO</a>
                                <div className="thumb-container thumb-0">
                                <YouTube
                                    videoId="YWMmd7hlwNI"
                                    opts={opts2}
                                    onReady={this._onReady}
                                />
                                </div>
                
                                <div className="entry__body">
                                <div className="entry__header">
                                    <h2 className="entry__title">
                                    <a href="single-post.html">Warren Buffett: Why Would I Take In Position In Something I Dont Know About</a>
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