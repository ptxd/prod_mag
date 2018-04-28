import React, { Component } from 'react'

class SearchBar extends Component {
    render () {
        return (
            <div className="nav__right-item nav__search">
                <a href="#" className="nav__search-trigger" id="nav__search-trigger">
                  <i className="ui-search nav__search-trigger-icon"></i>
                </a>                
            </div>
        )
    }
}

export default SearchBar