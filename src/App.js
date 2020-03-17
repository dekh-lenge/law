import React from "react";
import "./App.scss";
import AppRouter from "./routes";
import { connect } from "react-redux";
import Lottie from "react-lottie";
import { history } from "./utils/history";
import { setTabName } from "./redux/actions";
import { ToastContainer, toast } from 'react-toastify';
// import "./notify.js"
var lastTimeBackPress = 0;
var timePeriodToExit = 2000;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true,
      foreground:true
    };
    window.addEventListener(
      "online",
      (this.handleConnectionChange = this.handleConnectionChange.bind(this))
    );
    window.addEventListener(
      "offline",
      (this.handleConnectionChange = this.handleConnectionChange.bind(this))
    );
  }

  handleConnectionChange(event) {
    if (event.type == "offline") {
      this.setState({"isOnline": false});
    } else {
      this.setState({"isOnline": true});
    }
  }
  onDeviceReady() {
    let app = {};
    console.log("deviceready event");
    //document.getElementById('regId').innerHTML = 'true';

    app = window.PushNotification.init({
      android: {
        senderID: "363046536510"
      },
      ios: {
        sound: true,
        vibration: true,
        badge: true
      },
      windows: {}
    });

    app.on("registration", function(data) {
      console.log("registration event: " + data.registrationId);
      var oldRegId = localStorage.getItem("fcmtoken");
      if (oldRegId !== data.registrationId) {
        // Save new registration ID
        localStorage.setItem("fcmtoken", data.registrationId);
        // Post registrationId to your app server as the value has changed
      }
    });

    app.on("error", function(e) {
      console.log("push error = " + e.message);
    });

    app.on("notification", data => {
      console.log("notification event", data);
      app.finish(
        function() {
          console.log("success");
        },
        function() {
          console.log("error");
        }
      );
    });
  }
  onPause() {
    this.setState({
      foreground : false
    })
  }
  onResume() {
  }
  componentDidMount() {
    let self = this;
    document.addEventListener("pause", this.onPause(), false);
    document.addEventListener("resume", this.onResume(), false);
    document.addEventListener(
      "deviceready",
      () => {
        // this.onDeviceReady()
        document.addEventListener(
          "backbutton",
          e => {
            if (history.location.pathname != "/tabs") {
              if(localStorage.getItem("accessToken") != null){
                history.goBack();
              }
            } else {
              if (this.props.setTab == "home") {
                e.preventDefault();
                e.stopPropagation();
                if (
                  new Date().getTime() - lastTimeBackPress <
                  timePeriodToExit
                ) {
                  navigator.app.exitApp();
                } else {
                  window.plugins.toast.showWithOptions({
                    message: "Press again to exit.",
                    duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
                    position: "bottom",
                    addPixelsY: -40 // added a negative value to move it up a bit (default 0)
                  });

                  lastTimeBackPress = new Date().getTime();
                }
              } else {
                this.props.setTabName("home");
              }
            }
          },
          false
        );
      },
      false
    );
    {
      // localStorage.getItem("isUser") == 1 &&
      localStorage.getItem("accessToken") != null
        ? history.push("/tabs")
        : history.push("/login");
    }
  }
  componentWillUnmount(){
    localStorage.removeItem('foreground')
  }
  
  handleEmptyState(){
    return(
      <div className="empty-state no-internet" style={{margin:0,paddingTop:30}}>
              <p className="head"> Oops !</p>
              <p>No Internet Connection Found</p>
              <p>Check you connection</p>
            </div>
    )
  }
  renderLoader() {
    return <></>;
  }
  render() {
    const { state, props } = this;
    return (
      <div className="dark">
        <AppRouter />
        {
          !state.isOnline ?  this.handleEmptyState() : null
        }
        <ToastContainer />
        {props.loader.isLoading && this.renderLoader(props.loader.page)}
      </div>
    );
  }
}
const mapStateToProps = ({ loader, setTab }) => ({
  loader,
  setTab: setTab.tabName
});

const mapDispatchToProps = dispatch => ({
  setTabName: data => dispatch(setTabName(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// import React, { Component } from "react";
// import "./App.scss";
// import posed, { PoseGroup } from "react-pose";
// import HomePage from "./Home";
// import ProfilePage from "./Profile";
// import SelfiePage from "./Selfie";
// import ChatPage from "./Chat";
// import ActivityPage from "./Activity";
// import cx from "classnames";
// const Footer = posed.div({
//   // pressable: true,
//   press: { scale: 1.02, opacity: 0.5, rotate: 3 },
//   init: { scale: 1, opacity: 0, rotate: 0 },
//   init: { scale: 1, opacity: 0, rotate: 0 },
//   open: {
//     y: 0,
//     opacity: 1,
//     transition: ({ i }) => ({
//       opacity: 1,
//       delay: i * 50
//     })
//   },

//   closed: {
//     y: 10,
//     opacity: 0,
//     transition: ({ i }) => ({
//       opacity: 0,
//       delay: i * 50
//     })
//   }
// });
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       theme: "dark",
//       isHeaderFooterLoaded: false,
//       isCameraVisible: false,
//       tabbar_active_tab: "home",
//       tabbarShow: true
//     };
//   }

//   componentDidMount() {
//     let self = this;
//     let newState = { ...this.state };
//     this._HeaderFooterDelayTimeout = setTimeout(() => {
//       newState["isHeaderFooterLoaded"] = true;
//       self.setState(newState);
//     }, 500);
//   }

//   handleTabbarTabNavigation(tab) {
//     // if (window.CameraPreview) {
//     //   window.CameraPreview.stopCamera();
//     // }
//     window.scrollTo(0, 0);
//     this.setState({
//       isCameraVisible: tab == "selfie",
//       tabbarShow: !(tab == "selfie"),
//       tabbar_active_tab: tab
//     });
//   }

//   renderTabbar() {
//     const { props, state } = this;
//     return (
//       <div
//         className=" fadeInUp"
//         className={cx("footer d-flex animated", {
//           "fadeInUp": state.tabbarShow,
//           "fadeOutDown": !state.tabbarShow
//         })}
//       >
//         <div
//           onClick={() => {
//             this.handleTabbarTabNavigation("home");
//           }}
//           className={state.tabbar_active_tab == "home" ? "active_footer" : ""}
//         >
//           <img
//             src={
//               state.tabbar_active_tab == "home"
//                 ? require("./assets/tabbar/home1_active.svg")
//                 : require("./assets/tabbar/home1.svg")
//             }
//           />
//         </div>
//         <div
//           onClick={() => {
//             this.handleTabbarTabNavigation("selfie");
//           }}
//           className={state.tabbar_active_tab == "selfie" ? "active_footer" : ""}
//         >
//           <img
//             src={
//               state.tabbar_active_tab == "selfie"
//                 ? require("./assets/tabbar/selfie1_active.svg")
//                 : require("./assets/tabbar/selfie1.svg")
//             }
//           />
//         </div>
//         <div
//           onClick={() => {
//             this.handleTabbarTabNavigation("chat");
//           }}
//           className={state.tabbar_active_tab == "chat" ? "active_footer" : ""}
//         >
//           <img
//             src={
//               state.tabbar_active_tab == "chat"
//                 ? require("./assets/tabbar/chat1_active.svg")
//                 : require("./assets/tabbar/chat1.svg")
//             }
//           />
//         </div>
//         <div
//           onClick={() => {
//             this.handleTabbarTabNavigation("activity");
//           }}
//           className={
//             state.tabbar_active_tab == "activity" ? "active_footer" : ""
//           }
//         >
//           <img
//             src={
//               state.tabbar_active_tab == "activity"
//                 ? require("./assets/tabbar/activity1_active.svg")
//                 : require("./assets/tabbar/activity1.svg")
//             }
//           />
//         </div>
//         <div
//           onClick={() => {
//             this.handleTabbarTabNavigation("user");
//           }}
//           className={state.tabbar_active_tab == "user" ? "active_footer" : ""}
//         >
//           <img
//             src={
//               state.tabbar_active_tab == "user"
//                 ? require("./assets/tabbar/user1_active.svg")
//                 : require("./assets/tabbar/user1.svg")
//             }
//           />
//         </div>
//       </div>
//     );
//   }

//   render() {
//     const { props, state } = this;
//     return (
//       <div className={state.theme}>
//         <div className="camera_icon">
//           <SelfiePage
//             isVisible={state.isCameraVisible}
//             onHome={() => {
//               this.setState({
//                 isCameraVisible: false,
//                 tabbar_active_tab: "home",
//                 tabbarShow: true
//               });
//               setTimeout(() => {
//                 if (window.CameraPreview) {
//                   window.CameraPreview.stopCamera();
//                 }
//               }, 1000);
//             }}
//             onChat={() => {
//               this.setState({
//                 isCameraVisible: false,
//                 tabbar_active_tab: "chat",
//                 tabbarShow: true
//               });
//               setTimeout(() => {
//                 if (window.CameraPreview) {
//                   window.CameraPreview.stopCamera();
//                 }
//               }, 1000);
//             }}
//           />
//         </div>
//         {state.tabbar_active_tab == "home" ? (
//           <HomePage />
//         ) : state.tabbar_active_tab == "chat" ? (
//           <ChatPage />
//         ) : state.tabbar_active_tab == "activity" ? (
//           <ActivityPage />
//         ) : state.tabbar_active_tab == "user" ? (
//           <ProfilePage />
//         ) : (
//           ""
//         )}
//         {this.renderTabbar()}
//       </div>
//     );
//   }
// }

// export default App;
