import {BrowserRouter, Route} from "react-router-dom";
import HelloWorld from "./components/a7/HelloWorld.js";
import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build";
import './App.css';

function App() {
    return (
     <BrowserRouter>
          <div className="container">
              <Route path="/a7/hello" exact={true}>
                  <HelloWorld/>
              </Route>
              <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                  <Practice/>
              </Route>
              <Route path={"/a7/twitter"} component={Build} />
          </div>
      </BrowserRouter>

  );
}

export default App
