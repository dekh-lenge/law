import React, { Component } from "react";

// Styles
import "./styles.scss";

import cx from "classnames";
import { history } from "./../../utils/history";
import { connect } from "react-redux";
import { fetchProfileInfo } from "./../../redux/actions";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchProfileInfo()
    }

    render() {
        const { props, state } = this;
        return (
            <div>
                <p>Profile</p>
            </div>
        );
    }
}

const mapStateToProps = ({ profile }) => ({
    profileData: profile.data
});

const mapDispatchToProps = dispatch => ({
    dispatch,
    fetchProfileInfo: data => dispatch(fetchProfileInfo(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);