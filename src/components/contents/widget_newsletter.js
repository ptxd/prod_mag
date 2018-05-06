import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {subscribe} from '../../actions/ac_subform';
import {connect} from 'react-redux';

class WidgetNewsletter extends Component {

  constructor(props){
    super(props);
    this.state = { 
        email:''
    }

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onSubmitButton = this.onSubmitButton.bind(this);
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({email:event.target.value});
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.subscribe(this.state.email);
        this.setState({email:''});
    }
    onSubmitButton(event){
        alert('Thank You For Subscribing!');
        
    }
    render () {
        return (
                <div className="widget widget_mc4wp_form_widget">
                      <h4 className="widget-title">Subscribe for News</h4>
                      <form className="mc4wp-form" onSubmit={this.onFormSubmit}>
                        <div className="mc4wp-form-fields">
                          <div className="form-group">
                            <i className="ui-email"></i>
                            <input 
                                type="email" 
                                name="EMAIL" 
                                placeholder="Your email" 
                                required="" 
                                value={this.state.email}
                                onChange={this.onInputChange}
                            />
                          </div>
                          <input type="submit" className="btn btn-md btn-color" value="submit" onClick = {this.onSubmitButton}/>
                        </div>
                      </form>
                </div> 
        )
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ subscribe }, dispatch);
}

export default connect (null, mapDispatchToProps)(WidgetNewsletter);