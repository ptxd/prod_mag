import React, { Component } from 'react'

class WidgetNewsletter extends Component {
    render () {
        return (
                <div className="widget widget_mc4wp_form_widget">
                      <h4 className="widget-title">Subscribe for News</h4>
                      <form className="mc4wp-form">
                        <div className="mc4wp-form-fields">
                          <div className="form-group">
                            <i className="ui-email"></i>
                            <input type="email" name="EMAIL" placeholder="Your email" required=""/>
                          </div>
                          <input type="submit" className="btn btn-md btn-color" value="submit"/>
                        </div>
                      </form>
                </div> 
        )
    }
}

export default WidgetNewsletter