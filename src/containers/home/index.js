import React, { Component } from "react";

// Styles
import "./styles.scss";

import cx from "classnames";
import { history } from "./../../utils/history";
import { connect } from "react-redux";
import { fetchHomeFeed } from "./../../redux/actions";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : {

            }
        };
    }

    componentDidMount() {
        this.props.fetchHomeFeed(this.state.data)
    }

    render() {
        const { props, state } = this;
        
        return (
            <div>
                <p>Home</p>
            </div>
        );
    }
}

const mapStateToProps = ({ home }) => ({
    homeData: home.data,
});

const mapDispatchToProps = dispatch => ({
    dispatch,
    fetchHomeFeed: data => dispatch(fetchHomeFeed(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);