import React, { Component } from "react";

// Styles
import './styles.scss';

import HomePage from "../home";
import ProfilePage from "../profile";
import UploadPost from "../uploadpost";
import ActivityPage from "../notification";

import cx from "classnames";
import { connect } from "react-redux";
import { setTabName } from "./../../redux/actions";

class Tabs extends Component {
    constructor(props) {
		super(props);
		this.state = {};
    }

    componentDidMount() {
      	if(!this.props.setTab) this.props.setTabName("home");
    }

    handleTabbarTabNavigation(tab) {
		window.scrollTo(0, 0);
		this.props.setTabName(tab);
    }

    renderTabbar() {
		const { props, state } = this;
		return (
			<div className="footer d-flex">
			<div
				onClick={() => {
				this.handleTabbarTabNavigation("home");
				}}
				className={props.setTab === "home" ? "active_footer" : ""}
			>
				<img
					src={
						props.setTab == "home"
						? require("../../assets/tabbar/home1_active.svg")
						: require("../../assets/tabbar/home1.svg")
					}
					alt=""
				/>
			</div>
			<div
				onClick={() => {
				this.handleTabbarTabNavigation("upload-post");
				}}
				className={props.setTab == "upload-post" ? "active_footer" : ''}
			>
				<img
				src={require("../../assets/tabbar/selfie1.svg")}
				alt=""
				/>
			</div>
			<div
				onClick={() => {
				this.handleTabbarTabNavigation("activity");
				}}
				className={
				props.setTab == "activity" ? "active_footer" : ""
				}
			>
				<img
				src={
					props.setTab == "activity"
					? require("../../assets/tabbar/activity1_active.svg")
					: require("../../assets/tabbar/activity1.svg")
				}
				alt=""
				/>
			</div> 
			<div
				onClick={() => {
				this.handleTabbarTabNavigation("user");
				}}
				className={props.setTab == "user" ? "active_footer" : ""}
			>
				<img
					src={
						props.setTab == "user"
						? require("../../assets/tabbar/user1_active.svg")
						: require("../../assets/tabbar/user1.svg")
					}
					alt=""
				/>
				{props.newData === 'user' && 
				<p className="newData"></p>
				}
			</div>
			</div>
		);
    }

    render() {
		const { props, state } = this;

		return (
			<>
			{props.setTab && props.setTab == "home" ? (
				<HomePage />
			) : props.setTab == "upload-post" ? (
				<UploadPost />
			) : props.setTab == "activity" ? (
				<ActivityPage />
			) : props.setTab == "user" ? (
				<ProfilePage />
			) : (
				""
			)}

			{this.renderTabbar()}
			</>
		);
    }
}

const mapStateToProps = ({ setTab }) => ({
    setTab: setTab.tabName,
});

const mapDispatchToProps = dispatch => ({
    setTabName: data => dispatch(setTabName(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);