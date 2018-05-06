import React, { Component } from 'react'
import SearchForm from './navigation/search_form';
import NavWrapper from './navigation/nav_wrapper';
import Socials from './navigation/socials';
import Subscribe from './navigation/subscribe';
import SearchBar from './navigation/searchbar';

class Navigation extends Component {
    render () {
        return (
            <header className="nav d-lg-block d-none">
                <div className="nav__holder">
                    <div className="container relative">
                        <div className="flex-parent">
                            <SearchForm/>           
                            <NavWrapper/>
                            {/* <!-- Nav Right --> */}
                            <div className="nav__right nav--align-right d-none d-lg-flex">
                            {/* <!-- Socials --> */}
                            <Socials/>
                            {/* <!-- Subscribe --> */}
                            <Subscribe/>
                            {/* <!-- Search --> */}
                            <SearchBar/>
                            </div> 
                            {/* <!-- end nav right -->   */}
                        </div> 
                        {/* <!-- end flex-parent --> */}
                    </div> 
                    {/* <!-- end container --> */}
                </div>
            </header>
        )
    }
}

export default Navigation