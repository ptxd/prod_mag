import React, { Component } from 'react'

class Newsletters extends Component {
    render () {
        return (
            <div className="container">
                <div className="widget newsletter-wide">
                <div className="newsletter-wide__text">
                    <h3 className="widget-title newsletter-wide__title">Write For Us</h3>
                </div>
                <div className="newsletter-wide__form">
                    <form className="mc4wp-form">
                    <div className="mc4wp-form-fields">
                        <div className="form-group">
                        <i className="ui-user"></i>
                        <input type="text" name="NAME" placeholder="Your name" required=""/>
                        </div>
                        <div className="form-group">
                        <i className="ui-email"></i>
                        <input type="email" name="EMAIL" placeholder="Your email" required=""/>
                        </div>
                        <input type="submit" className="btn btn-md btn-color" value="Apply"/>
                    </div>
                    </form>
                </div>
                </div>
            </div> 
        )
    }
}

export default Newsletters