
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
            >
                <div className="feeds-container">
                    <div className="description">{description}</div>
                </div>
            </Card>
        );
    }
}

export default FeedsCard;