import React, { Component } from "react";

// Styles
import './styles.scss';

// Components
import FeedsCard from '../../components/FeedsCard';
import Header from '../../components/Header';

import cx from "classnames";
import { history } from "./../../utils/history";
import { connect } from "react-redux";
import { fetchNotifications, setNotificationData } from "./../../redux/actions";

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // this.props.fetchNotifications()
    }

    handleCardClick(feedObject) {
        this.props.setNotificationData(feedObject)
        history.push('/notification-details')
    }

    renderNotification(notificationObject) {
        console.log("Notification", notificationObject);
        
        return(
            <FeedsCard 
                id={notificationObject.id}
                timeStamp={notificationObject.timeStamp}
                description={notificationObject.description}
                onCardClicked={() => {this.handleCardClick(notificationObject)}}
            />
        );
    }

    render() {
        const { props, state } = this;
        return (
            <div className="screen notifications">
                <Header title="Notifications" />
                <div className="notifications-container">
                    {props.notificationData
                        && props.notificationData.notificationList
                        && props.notificationData.notificationList.length > 0
                        && props.notificationData.notificationList.map((notificationObject, index) => {
                            return this.renderNotification(notificationObject);
                        })
                    }
                </div> 
            </div>
        );
    }
}

const mapStateToProps = ({ notifications, loader }) => ({
    notificationData: notifications.data
});

const mapDispatchToProps = dispatch => ({
    setNotificationData: data => dispatch(setNotificationData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);