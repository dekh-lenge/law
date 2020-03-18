import React, { Component } from "react";

// Styles
import './styles.scss';

// Components
import FeedsCard from '../../components/FeedsCard';
import Header from '../../components/Header';

import cx from "classnames";
import { history } from "./../../utils/history";
import { connect } from "react-redux";


class NotificationDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { state, props } = this;

        return (
            <div className="screen notification-details">
                <Header hasBack />
            </div>
        );
    }
}

const mapStateToProps = ({ notifications, loader }) => ({
    notificationData: notifications.data
});

const mapDispatchToProps = dispatch => ({
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationDetails);