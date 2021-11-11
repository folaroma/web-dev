import React from "react";
import { Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";
import who from "../../../reducers/who";
import tweets from "../../../reducers/tweets";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/cyborg/bootstrap.min.css";

const reducer = combineReducers({ tweets: tweets, who });
const store = createStore(reducer);

const Build = ({ match }) => {
  return (
    <Provider store={store}>
      <div>
        <Route
          path={["/", "/a7/twitter/home"]}
          exact={true}
          component={HomeScreen}
        />
        <Route
          path={`${match.url}/explore`}
          exact={true}
          component={ExploreScreen}
        />
      </div>
    </Provider>
  );
};
export default Build;
