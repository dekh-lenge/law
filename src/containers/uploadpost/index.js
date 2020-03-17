import React, { Component } from "react";

// Styles
import './styles.scss';

import cx from "classnames";
import { history } from "./../../utils/history";
import { connect } from "react-redux";


class UploadPost extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const { props, state } = this;
        return (
            <div>
                <p>UploadPost</p>
            </div>
        );
    }
}

const mapStateToProps = ({ }) => ({ });

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UploadPost);