import React, { Component } from 'react'

class SearchBar extends Component {
    render () {
        return (
            <div className="nav__mobile-search d-lg-none">
                <a href="#" className="nav__search-trigger">
                    <i className="ui-search nav__search-trigger-icon"></i>
                </a>                
            </div>
        )
    }
}

export default SearchBar