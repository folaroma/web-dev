import PostSummaryList from "../PostSummaryList/";

const ExploreComponent = () => {
    return (
        <div className="row">
            <div className="row">
                <div className="input-group">
                    <span className="input-group-append position-absolute">
                    <button className="btn ms-auto" type="button">
                        <i className="fa fa-search"></i>
                    </button>
                    </span>
                    <div className="form-outline ms-1 mb-2" style={{"width": "90%"}}>
                        <input type="search" id="form1" className="form-control rounded-pill w-100 ps-5" placeholder="Search Twitter" />
                    </div>
                    <span className="input-group-addon">
                    <i className="fas fa-cog fa-2x" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div className="row">
                <ul className="nav nav-tabs mb-2 ms-3 w-100">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">For you</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Entertainment</a>
                    </li>
                </ul>
            </div>
            <div className="row">
                <div className="wrapper position-relative ms-1 mb-2">
                    <img src="./../../images/starship.jpeg" alt="" className="wd-starship"/>
                    <div className="overlay ms-2">
                        <h2 className="header position-absolute bottom-0 fw-bold">SpaceX's Starship</h2>
                    </div>
                </div>
            </div>

            <div className="row">
                <PostSummaryList/>
            </div>
        </div>
    );
}
export default ExploreComponent;