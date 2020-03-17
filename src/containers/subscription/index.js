import React, { Component } from "react";

// Styles
import './styles.scss';

import cx from "classnames";
import { history } from "./../../utils/history";
import { connect } from "react-redux";
import { fetchSubscriptions } from "./../../redux/actions";


class Subscriptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchSubscriptions()
    }

    render() {
        const { props, state } = this;
        return (
            <div>
                <p onClick={() => {history.push('/tabs')}}>Subscriptions</p>
            </div>
        );
    }
}

const mapStateToProps = ({ subscriptions }) => ({
  subscriptions: subscriptions.data,
});

const mapDispatchToProps = dispatch => ({
  fetchSubscriptions: data => dispatch(fetchSubscriptions(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);