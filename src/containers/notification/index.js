import React, { Component } from "react";

// Styles
import './styles.scss';

import cx from "classnames";
import { history } from "./../../utils/history";
import { connect } from "react-redux";
import { fetchNotifications } from "./../../redux/actions";

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchNotifications()
    }

    render() {
        const { props, state } = this;
        return (
        <div>
            <p>Activity</p>
        </div>
        );
    }
}

const mapStateToProps = ({ notifications, loader }) => ({
    notificationData: notifications.data
});

const mapDispatchToProps = dispatch => ({
    fetchNotifications: data => dispatch(fetchNotifications(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);