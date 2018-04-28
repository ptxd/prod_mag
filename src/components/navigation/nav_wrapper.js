import React, { Component } from 'react'

class NavWrapper extends Component {
    render () {
        return (
            <nav className="flex-child nav__wrap d-none d-lg-block">              
              <ul className="nav__menu">

                <li className="active">
                  <a href="index.html">Home</a>
                </li>

                <li className="nav__dropdown">
                  <a href="#">Crypto Sphere</a>
                  <ul className="nav__dropdown-menu">
                    <li><a href="single-post.html">Cryptocurrencies</a></li>
                    <li><a href="single-post-gallery.html">Blockchain</a></li>
                    <li><a href="single-post-gallery.html">Education</a></li>
                    <li><a href="single-post-gallery.html">ICO</a></li>
                    <li><a href="single-post-gallery.html">Mining</a></li>
                    <li><a href="single-post-gallery.html">Crypto Markets</a></li>
                  </ul>
                </li>

                <li className="nav__dropdown">
                  <a href="#">The Guild</a>
                  <ul className="nav__dropdown-menu">
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    {/* <li><a href="search-results.html">Search Results</a></li>
                    <li><a href="categories.html">Categories</a></li>
                    <li><a href="404.html">404</a></li> */}
                  </ul>
                </li>

                {/* <li className="nav__dropdown">
                  <a href="#">Features</a>
                  <ul className="nav__dropdown-menu">
                    <li><a href="lazyload.html">Lazy Load</a></li>
                    <li><a href="shortcodes.html">Shortcodes</a></li>
                  </ul>
                </li>  */}

                {/* <li>
                  <a href="#">Purchase</a>
                </li>  */}
              </ul> 
            </nav>
        )
    }
}

export default NavWrapper