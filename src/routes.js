import { createHashHistory } from 'history';
import React from 'react';

// NAVIGATION
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// import history from "./utils/history";
// CONTAINERS
import Login from './containers/login';
import SignUp from './containers/signup';
import home from './containers/home';
import Tabs from './containers/tabs';
import notification from './containers/notification';
import UploadPost from './containers/uploadpost';
import profile from './containers/profile';
import Subscriptions from './containers/subscription';
import TransDetails from './containers/transDetails';

/**
 * @name AppRouter
 * @summary Renders the application routes
 * @return {jsx} React node for the application routes
 */
const history = createHashHistory();

const AppRouter = () => (
  <Router history={history}>
      <Switch>
        <Route  path="/login" component={Login} />
        <Route  path="/tabs" component={Tabs} />
        <Route  path="/home" component={home} />
        <Route  path="/notification" component={notification} />
        <Route  path="/profile" component={profile} />
        <Route  path="/upload-post" component={UploadPost} />
        <Route  path="/signup" component={SignUp} />
        <Route  path="/subscriptions" component={Subscriptions} />
        <Route  path="/transaction-details" component={TransDetails} />
      </Switch>
  </Router>
);
export default AppRouter;