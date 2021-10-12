import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="row">
                <div class="input-group">
                <span class="input-group-append position-absolute">
                <button class="btn ms-auto" type="button">
                    <i class="fa fa-search"></i>
                </button>
                </span>
                <div class="form-outline ms-1 mb-2" style="width: 90%;">
                    <input type="search" id="form1" class="form-control rounded-pill w-100 ps-5" placeholder="Search Twitter" />
                </div>
                <span class="input-group-addon">
                <i class="fas fa-cog fa-2x" aria-hidden="true"></i>
                </span>
            </div>
            <div class="row">
                <ul class="nav nav-tabs mb-2 ms-3 w-100">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Entertainment</a>
                    </li>
                </ul>
            </div>
            <div class="row">
                <div class="wrapper position-relative ms-1 mb-2">
                    <img src="images/starship.jpeg" alt="" class="wd-starship" />
                    <div class="overlay ms-2">
                        <h2 class="header position-absolute bottom-0 fw-bold text-black">SpaceX's Starship</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                ${PostSummaryList()}
            </div>

    `);
}
export default ExploreComponent;