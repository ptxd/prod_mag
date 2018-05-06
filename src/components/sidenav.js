import React, { Component } from 'react'

class SideNav extends Component {
    render () {
        var padSideNav = {
            paddingTop:'6px'
        };

        return (
            <header className="sidenav" id="sidenav">
            {/* <!-- close --> */}
                <div className="sidenav__close">
                    <button className="sidenav__close-button" id="sidenav__close-button" aria-label="close sidenav">
                        <i className="ui-close sidenav__close-icon"></i>
                    </button>
                </div>

                {/* <!-- Nav --> */}
                <nav className="sidenav__menu-container">
                <ul className="sidenav__menu" role="menubar">
                    <li className="active">
                    <a href="index.html" className="sidenav__menu-link">Home</a>
                    </li>
                    <li>
                    <a href="#" className="sidenav__menu-link">Crypto Sphere</a>
                    <button className="sidenav__menu-toggle" aria-haspopup="true" aria-label="Open dropdown"><i className="ui-arrow-down"></i></button>
                    <ul className="sidenav__menu-dropdown">
                        <li><a href="single-post-gallery.html" className="sidenav__menu-link">Cryptocurrencies</a></li>
                        <li><a href="single-post.html" className="sidenav__menu-link">Blockchain</a></li>
                        <li><a href="single-post.html" className="sidenav__menu-link">Education</a></li>
                        <li><a href="single-post.html" className="sidenav__menu-link">Mining</a></li>
                        <li><a href="single-post.html" className="sidenav__menu-link">Crypto Markets</a></li>
                        <li><a href="single-post.html" className="sidenav__menu-link">ICO</a></li>
                    </ul>
                    </li>

                    <li>
                    <a href="#" className="sidenav__menu-link">The Guild</a>
                    <button className="sidenav__menu-toggle" aria-haspopup="true" aria-label="Open dropdown"><i className="ui-arrow-down"></i></button>
                    <ul className="sidenav__menu-dropdown">
                        <li><a href="about.html" className="sidenav__menu-link">About</a></li>
                        <li><a href="contact.html" className="sidenav__menu-link">Contact</a></li>
                        {/* <!-- <li><a href="search-results.html" className="sidenav__menu-link">Search Results</a></li> -->
                        <!-- <li><a href="categories.html" className="sidenav__menu-link">Categories</a></li> -->
                        <!-- <li><a href="404.html" className="sidenav__menu-link">404</a></li> --> */}
                    </ul>
                    </li>

                    {/* <!-- <li>
                    <a href="#" className="sidenav__menu-link">Features</a>
                    <button className="sidenav__menu-toggle" aria-haspopup="true" aria-label="Open dropdown"><i className="ui-arrow-down"></i></button>
                    <ul className="sidenav__menu-dropdown">
                        <li><a href="lazyload.html" className="sidenav__menu-link">Lazy Load</a></li>
                        <li><a href="shortcodes.html" className="sidenav__menu-link">Shortcodes</a></li>
                    </ul>
                    </li> --> */}

                    <li>
                    {/* <!-- <a href="#" className="sidenav__menu-link">Purchase</a> --> */}
                    </li>
                </ul>
                </nav>

                <div className="socials sidenav__socials"> 
                <a className="social social--small social-facebook" href="https://www.facebook.com/guild.crypto.3" target="_blank" aria-label="facebook">
                    <i className="ui-facebook"></i>
                </a>
                <a className="social social--small social-twitter" href="#" target="_blank" aria-label="twitter">
                    <i className="ui-twitter"></i>
                </a>
                <a className="social social--nobase" href="https://twitter.com/guildcrypto" target="_blank" aria-label="telegram" style={padSideNav}>
                    <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" className=""></path></svg></i>
                </a>
                <a className="social social--small social-youtube" href="#" target="_blank" aria-label="youtube">
                    <i className="ui-youtube"></i>
                </a>
                <a className="social social--small social-instagram" href="#" target="_blank" aria-label="instagram">
                    <i className="ui-instagram"></i>
                </a>
                </div>
            </header>
        )
    }
}

export default SideNav