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
    // eslint-disable-next-line no-lone-blocks
    {
      localStorage.getItem("isUser") == 1 &&
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
      <>
        <AppRouter />
        {
          !state.isOnline ?  this.handleEmptyState() : null
        }
        <ToastContainer />
        {props.loader.isLoading && this.renderLoader(props.loader.page)}
      </>
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
