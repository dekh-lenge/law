import React, { Component } from "react";

// Styles
import "./styles.scss";

// Components
import FeedsCard from '../../components/FeedsCard';
import Header from '../../components/Header';

// Utils
import keys from '../../utils/keys';
import ValidationUtil from '../../utils/validation';

import cx from "classnames";
import { history } from "./../../utils/history";
import { connect } from "react-redux";
import { fetchHomeFeed, setTransactionData } from "./../../redux/actions";

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

    handleCardClick(feedObject) {
        this.props.setTransactionData(feedObject)
        history.push('/transaction-details')
    }

    renderFeed(feedObject) {
        return (
            <FeedsCard 
                id={feedObject.id}
                timeStamp={feedObject.timeStamp}
                description={feedObject.description}
                image={feedObject.image}
                onCardClicked={() => {this.handleCardClick(feedObject)}}
            />
        );
    }

    render() {
        const { state, props } = this;
        
        return (
            <div className="screen home">
                <Header 
                    title="Feeds"
                />
                <div className="home-container">
                    {props.homeData 
                        && props.homeData.feedList
                        && props.homeData.feedList.length > 0 
                        && props.homeData.feedList.map((feedObject, index) => {
                            return this.renderFeed(feedObject);
                    })}
                </div>
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
    setTransactionData: data => dispatch(setTransactionData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);