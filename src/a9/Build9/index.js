import React from "react";
import { Route } from "react-router-dom";
import HomeScreen9 from "./HomeScreen9";
import ExploreScreen9 from "./ExploreScreen9";
import who from "../reducers/who";
import tweets from "../reducers/tweets";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/cyborg/bootstrap.min.css";

const reducer = combineReducers({ tweets: tweets, who });
const store = createStore(reducer);

const Build9 = () => {
  return (
    <Provider store={store}>
      <div>
        <Route
          path={["/", "/a9/twitter/home"]}
          exact={true}
          component={HomeScreen9}
        />
        <Route
          path="/a9/twitter/explore"
          exact={true}
          component={ExploreScreen9}
        />
      </div>
    </Provider>
  );
};
export default Build9;
