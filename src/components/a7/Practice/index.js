import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";
const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <Link to="/a7/hello">Hello</Link> |
            <Link to="/a7/twitter/home">Build</Link>
            <ReduxExamples/>

        </div>
    )
};

export default Practice;