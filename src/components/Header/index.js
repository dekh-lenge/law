import React, { Component } from 'react';

// LIBRARIES
import cx from 'classnames';

// STYLES
import './styles.scss';

// ASSETS
import backArrow from '../../assets/back.svg';

import { history } from '../../utils/history';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    onBackClicked() {
        history.goBack()
    }

    renderBack() {
        return (
            <div 
                className="back-section"
                onClick={() => this.onBackClicked()}
            >
                <img src={backArrow} alt=""/>
            </div>
        );
    }

    renderTitle(title) {
        return(
            <p>{title}</p>
        );
    }

    render() {
        const { props } = this;
        const {
            hasBack,
            title,
            containerClassName,
            containerStyles,
            ...others
        } = props;

        return (
            <div className={cx("header", containerClassName)}>
                <div className="header-container">
                    {hasBack && this.renderBack()}
                    {title && this.renderTitle(title)}
                </div>
            </div>
        );
    }
}

export default Header