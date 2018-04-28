import React, { Component } from 'react'

class SearchForm extends Component {
    render () {
        return (
            <form role="search" method="get" className="nav__search-form d-lg-none">
                <input type="search" className="nav__search-input" placeholder="Type &amp; Hit Enter"/>
                <i className="ui-close nav__search-close"></i>
            </form> 
        )
    }
}

export default SearchForm