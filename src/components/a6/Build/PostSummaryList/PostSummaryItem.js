const PostSummaryItem = ({
    post = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "./../../images/react-blue.png"
    }
}) => {
    var image = post.image;
    var topic = post.topic;
    var username = post.userName
    var time = post.time;
    var title = post.title;
    if (post.hasOwnProperty("tweets")) {
        var tweets = post.tweets;
    } else {
        var tweets = "";
    }

    const TopicImage = () => {
        return (
            <div className="wd-topic-image">
                <img src= {image} className="wd-image-icon float-end ms-2 mt-1" />
            </div>
        )
    }

    const Topic = () => {
        if (topic !== '') {
            return (
                <div className="row gx-0">
                    <div className="wd-topic text-secondary fs-6">
                        {topic}
                    </div>
                </div>
            )
        } else {
            return (''
            )
        }
    }

    const Username = () => {
        if (username !== '') {
            return (
                <div className="row gx-0">
                    <div className="wd-account">
                        <div className="wd-title float-start fw-bold">
                            {username}
                        </div>
                        <div className="wd-verified">
                            <img src="./../../images/verified.png" className="wd-verified-icon-user float-start ms-1 me-1"/>
                        </div>
                        <div className="wd-time text-secondary">
                            - {time}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (''
            )
        }
    }

    const Description = () => {
        if (title !== '') {
            return (
                <div className="row gx-0">
                    <div className="wd-description fw-bold">
                        {title}
                    </div>
                </div>
            )
        } else {
            return (''
            )
        }
    }

    const Tweets = () => {
        if (tweets !== "") {
            return (
                <div className="row gx-0">
                    <div className="wd-tweets text-secondary">
                        {tweets}
                    </div>
                </div>
            )
        } else {
            return (''
            )
        }
    }

    const item = () => {
        return (
            <li className="list-group-item list-group-item-action">
                {TopicImage()}
                {Topic()}
                {Username()}
                {Description()}
                {Tweets()}
            </li>
        )
    }
    return item();
}
export default PostSummaryItem;