import React, { Component } from 'react'

class WidgetNewsletter extends Component {
    render () {
        return (
                <div class="widget widget_mc4wp_form_widget">
                      <h4 class="widget-title">Subscribe for News</h4>
                      <form class="mc4wp-form">
                        <div class="mc4wp-form-fields">
                          <div class="form-group">
                            <i class="ui-email"></i>
                            <input type="email" name="EMAIL" placeholder="Your email" required=""/>
                          </div>
                          <input type="submit" class="btn btn-md btn-color" value="submit"/>
                        </div>
                      </form>
                </div> 
        )
    }
}

export default WidgetNewsletter