

function PostSummaryItem(post) {
    var image = post.image;
    var topic = post.topic;
    var username = post.userName
    var time = post.time;
    var title = post.title;
    if (post.hasOwnProperty("tweets")) {
        var tweets = post.tweets;
    }
    else {
        var tweets = "";
    }

    const TopicImage = () => {
        return (`
            <div class="wd-topic-image">
                <img src= ${image} class="wd-image-icon float-end">
            </div>
        `)
    }
    
    const Topic = () => {
        if (topic !== '') {
            return (`
                <div class="row gx-0">
                    <div class="wd-topic">
                        ${topic}
                    </div>
                </div>
            `)
        }
    }
    
    const Username = () => {
        if (username !== '') {
            return (`
                <div class="row gx-0">
                    <div class="wd-account">
                        <div class="wd-title float-start">
                            ${username}
                        </div>
                        <div class="wd-verified">
                            <img src="./images/verified.png" class="wd-verified-icon float-start ms-1 me-1" style="margin-top: 3px;">
                        </div>
                        <div class="wd-time">
                            - ${time}
                        </div>
                    </div>
                </div>
            `)
        }
    }
    
    const Description = () => {
        if (title !== '') {
            return (`
                <div class="row gx-0">
                    <div class="wd-description">
                        ${title}
                    </div>
                </div>
            `)
        }
    }
    
    const Tweets = () => {
        if (tweets !== "") {
            return (`
                <div class="row gx-0">
                    <div class="wd-tweets">
                        ${tweets}
                    </div>
                </div>
            `)
        }
        else {
            return (`
            `)
        }
    }

    const item = () => {
        return (`
            <li class="list-group-item list-group-item-action">
                ${TopicImage()}
                ${Topic()}
                ${Username()}
                ${Description()}
                ${Tweets()}
            </li>
        `)
    }
    return item();
}
export default PostSummaryItem;