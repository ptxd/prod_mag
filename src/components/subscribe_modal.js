import React, { Component } from 'react'

class SubscribeModal extends Component {
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
                    <form className="mc4wp-form" method="post">
                        <div className="mc4wp-form-fields">
                        <div className="form-group">
                            <i className="mc4wp-form-icon ui-email"></i>
                            <input type="email" name="EMAIL" placeholder="Your email" required=""/>
                        </div>
                        <input type="submit" className="btn btn-md btn-color btn-block" value="Subscribe"/>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default SubscribeModal