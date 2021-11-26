import APIExamples from "./APIExamples";
import { Link } from "react-router-dom";
import ReduxExamples from "../../components/a7/Practice/ReduxExamples/components/index.js";
import Movies from "./Movies/"

const Practice9 = () => {
    return(
        <div>
            <h1>Practice</h1>
            <Link to="/a9/twitter/home">Build</Link> |
            <Link to="/a7/hello"> Hello </Link> |
            <Link to="/a8/twitter/home"> A8 Build </Link> |
            <Link to="/a8/practice"> A8 Practice </Link> |
            <Link to="/a7/twitter/home"> A7 Build </Link> |
            <Link to="/a7/practice"> A7 Practice </Link>
            <Movies/>
            <APIExamples/>
            <ReduxExamples/>
        </div>
    )
};
export default Practice9;
