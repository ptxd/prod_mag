import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {subscribe} from '../actions/ac_subform';


class SubscribeModal extends Component {

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
            <div className="modal fade" id="subscribe-modal" tabIndex="-1" role="dialog" aria-labelledby="subscribeModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="subscribeModalLabel">Don't miss the latest news from the cryptocurrency world</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    <form className="mc4wp-form" onSubmit={this.onFormSubmit}>
                        <div className="mc4wp-form-fields">
                        <div className="form-group">
                            <i className="mc4wp-form-icon ui-email"></i>
                            <input 
                                type="email" 
                                name="EMAIL" 
                                placeholder="Your email" 
                                required="" 
                                value={this.state.email}
                                onChange={this.onInputChange}
                                />
                        </div>
                        <input 
                            type="submit" 
                            className="btn btn-md btn-color btn-block" 
                            value = "Subscribe"
                            onClick = {this.onSubmitButton}
                            />
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ subscribe }, dispatch);
}

export default connect (null, mapDispatchToProps)(SubscribeModal);
   