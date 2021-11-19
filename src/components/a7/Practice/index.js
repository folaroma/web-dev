import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";

const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <Link to="/a7/hello">Hello</Link> |
            <Link to="/a7/twitter/home">A7 Build</Link> |
            <Link to="/a8/practice">A8 Practice</Link> |
            <Link to="/a8/twitter/home">A8 Build</Link>
            <ReduxExamples/>

        </div>
    )
};

export default Practice;