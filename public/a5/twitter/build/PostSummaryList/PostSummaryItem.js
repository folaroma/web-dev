import posts from "./posts";

const PostSummaryItem = () => {
    return (`
    <li class="list-group-item list-group-item-action">
        <div class="wd-topic-image">
            <img src="images/react.png" class="wd-react float-end">
        </div>
        <div class="row gx-0">
            <div class="wd-topic">
                Web Development
            </div>
        </div>
        <div class="row gx-0">
            <div class="wd-account">
                <div class="wd-title">
                    ReactJS
                </div>
            <div class="wd-verified">
                <img src="images/verified.png" class="wd-verified-icon">
            </div>
                                <div class="wd-time">
                                    - 2h
                                </div>
                            </div>
                        </div>
                        <div class="row gx-0">
                            <div class="wd-description">
                                React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item list-group-item-action">
                        <div class="wd-topic-image">
                            <img src="images/javascript.png" class="wd-react float-end">
                        </div>
                        <div class="row gx-0">
                            <div class="wd-account">
                                <div class="wd-title">
                                    JavaScript
                                </div>
                                <div class="wd-verified">
                                    <img src="images/verified.png" class="wd-verified-icon">
                                </div>
                                <div class="wd-time">
                                    - 2h
                                </div>
                            </div>
                        </div>
                        <div class="row gx-0">
                            <div class="wd-description">
                                JavaScript is programming language that can run on browsers as well as desktops
                            </div>
                        </div>
                        <div class="row gx-0">
                            <div class="wd-tweets">
                                123K Tweets
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item list-group-item-action">
                        <div class="wd-topic-image">
                            <img src="images/jquery.png" class="wd-react float-end">
                        </div>
                        <div class="row gx-0">
                            <div class="wd-topic">
                                Web Development
                            </div>
                        </div>
                        <div class="row gx-0">
                            <div class="wd-description">
                                jQuery
                            </div>
                        </div>
                        <div class="row gx-0">
                            <div class="wd-tweets">
                                123K Tweets
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item list-group-item-action">
                        <div class="wd-topic-image">
                            <img src="images/nodejs.png" class="wd-react float-end">
                        </div>
                        <div class="row gx-0">
                            <div class="wd-topic">
                                Web Development
                            </div>
                        </div>
                        <div class="row gx-0">
                            <div class="wd-account">
                                <div class="wd-title">
                                    NodeJS
                                </div>
                                <div class="wd-verified">
                                    <img src="images/verified.png" class="wd-verified-icon">
                                </div>
                                <div class="wd-time">
                                    - 2h
                                </div>
                            </div>
                        </div>
                        <div class="row gx-0">
                            <div class="wd-tweets">
                                123K Tweets
                            </div>
                        </div>
                    </li>
    `);
}
export default PostSummaryItem;