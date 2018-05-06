import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {appForm} from '../actions/ac_appform';
import {connect} from 'react-redux';

class ApplicationForm extends Component {
    constructor(props){
    super(props);
    this.state = { 
        name:'',
        email:''
    }

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onSubmitButton = this.onSubmitButton.bind(this);
    }

    onNameChange(event){
        this.setState({name:event.target.value});
    }
    onEmailChange(event){
        this.setState({email:event.target.value});
    }
    onFormSubmit(event){
        event.preventDefault();
        console.log(event);
        this.props.appForm({ name: this.state.name, email: this.state.email});
        this.setState({ name:'', email:''});
    }
    onSubmitButton(event){
        alert('Thank You For Your Application!');
    }
    render () {
        return (
            <div className="container">
                <div className="widget newsletter-wide">
                <div className="newsletter-wide__text">
                    <h3 className="widget-title newsletter-wide__title">Write For Us</h3>
                </div>
                <div className="newsletter-wide__form">
                    <form className="mc4wp-form" onSubmit={this.onFormSubmit}>
                    <div className="mc4wp-form-fields">
                        <div className="form-group">
                        <i className="ui-user"></i>
                        <input 
                                type="text" 
                                name="NAME" 
                                placeholder="Your name" 
                                required="" 
                                value={this.state.name}
                                onChange={this.onNameChange}
                            />
                        </div>
                        <div className="form-group">
                        <i className="ui-email"></i>
                        <input 
                                type="email" 
                                name="EMAIL" 
                                placeholder="Your email" 
                                required="" 
                                value={this.state.email}
                                onChange={this.onEmailChange}
                        />
                        </div>
                        <input type="submit" className="btn btn-md btn-color" value="Apply" onClick = {this.onSubmitButton}/>
                    </div>
                    </form>
                </div>
                </div>
            </div> 
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ appForm }, dispatch);
}

export default connect (null, mapDispatchToProps)(ApplicationForm);