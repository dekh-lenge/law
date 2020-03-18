import React, { Component } from "react";

// Styles
import "./styles.scss";

import cx from "classnames";
import { history } from "../../utils/history";
import { connect } from "react-redux";

class TransactionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { props, state } = this;
        return (
            <div className="transaction-details">
                <img className="back-img" onClick={() => {history.goBack()}} src={require('../../assets/back.svg')} />
                <img src={props.transactionData.image} />
                <div className="info">
                    <div className="general-info">
                        <p className="time-stamp">{props.transactionData.timeStamp}</p>
                        <div className="images">
                            <img src={require('../../assets/mobile.svg')} />
                            <img src={require('../../assets/mail.svg')} />
                            <img src={require('../../assets/download.svg')} />
                        </div>
                    </div>
                    <label>Name</label>
                    <p className="name">{props.transactionData.name}</p>
                    <label>Email</label>
                    <p className="email">{props.transactionData.email}</p>
                    <label>Mobile</label>
                    <p className="mobile">{props.transactionData.mobile}</p>
                    <label>Description</label>
                    <p className="description">{props.transactionData.description}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ transactionData }) => ({
    transactionData: transactionData.data
});

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionDetails);