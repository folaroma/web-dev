import {BrowserRouter, Route} from "react-router-dom";
import HelloWorld from "./components/a7/HelloWorld.js";
import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build";
import ExploreScreen from "./components/a7/Build/ExploreScreen/index.js";
import Practice8 from "./components/a8/Practice8";
import Build8 from "./components/a8/Build8";
import ExploreScreen8 from "./components/a8/Build8/ExploreScreen8";
import Practice9 from "./a9/Practice9";
import Build9 from "./a9/Build9";
import ExploreScreen9 from "./a9/Build9/ExploreScreen9/";
import './App.css';

function App() {
    return (
     <BrowserRouter>
          <div className="container">
              <Route path="/a7/hello" exact={true}>
                  <HelloWorld/>
              </Route>
              <Route path={["/", "/a9", "/a9/practice"]} exact={true}>
                  <Practice9/>
              </Route>
              <Route path={"/a7/twitter"} component={Build} />
              <Route path={"/a7/twitter/explore"} component={ExploreScreen} />
              <Route path={"/a8/twitter"} component={Build8} />
              <Route path={"/a8/twitter/explore"} component={ExploreScreen8} />
              <Route path={"/a8/practice"} component={Practice8} />
              <Route path={"/a9/practice"} component={Practice9} />
              <Route path={"/a9/twitter"} component={Build9} />
              <Route path={"/a9/twitter/explore"} component={ExploreScreen9} />
          </div>
      </BrowserRouter>

  );
}

export default App
