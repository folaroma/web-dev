import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js"
import WhoToFollowList from "../WhoToFollowList/index.js";


(function($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2">
                ${NavigationSidebar()}
            </div>
            <div class="col-6">
                ${ExploreComponent()}
            </div>
        </div>
            <div class="col-4">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
})($);