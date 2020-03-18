import React, { Component } from "react";

// Styles
import "./styles.scss";

// Components
import Card from '../../components/Card';
import FeedsCard from '../../components/FeedsCard';

// Utils
import keys from '../../utils/keys';
import ValidationUtil from '../../utils/validation';

import cx from "classnames";
import { history } from "./../../utils/history";
import { connect } from "react-redux";
import { fetchHomeFeed } from "./../../redux/actions";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : {}
        };
    }

    componentDidMount() {
        // this.props.fetchHomeFeed(this.state.data)
    }

    renderFeed(feedObject) {
        console.log(feedObject)
        return (
            <FeedsCard 
                id={feedObject.id}
                timeStamp={feedObject.timeStamp}
                description={feedObject.description}
            />
        );
    }

    render() {
        const { state, props } = this;
        
        return (
            <div className="screen home-container">
                {props.homeData 
                    && props.homeData.feedList
                    && props.homeData.feedList.length > 0 
                    && props.homeData.feedList.map((feedObject, index) => {
                        return this.renderFeed(feedObject);
                    })}
            </div>
        );
    }
}

const mapStateToProps = ({ home }) => ({
    homeData : home.data
});

const mapDispatchToProps = dispatch => ({
    dispatch,
    fetchHomeFeed: data => dispatch(fetchHomeFeed(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);