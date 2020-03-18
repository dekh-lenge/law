
import React, { Component } from "react";

// LIBRARIES
import cx from 'classnames';

// Components
import Card from '../Card';

// STYLES
import './styles.scss';

class FeedsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    onCardClicked() {
        this.props.onCardClicked && this.props.onCardClicked()
    }

    render() {
        const { props } = this;
        const {
            id,
            timeStamp,
            header,
            description,
            image,
            containerClassName,
            containerStyles,
            ...others
        } = props

        return(
            <Card 
                key={id}
                title={timeStamp}
                containerClassName="home-card"
                onCardClicked={() => {this.onCardClicked()}}
            >
                <div className="feeds-container">
                    <div className="description">{description}</div>
                    <img className="doc-img" src={image} />
                </div>
            </Card>
        );
    }
}

export default FeedsCard;