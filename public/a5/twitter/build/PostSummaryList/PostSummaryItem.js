

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
                <img src= ${image} class="wd-image-icon float-end ms-2 mt-1">
            </div>
        `)
    }
    
    const Topic = () => {
        if (topic !== '') {
            return (`
                <div class="row gx-0">
                    <div class="wd-topic text-secondary fs-6">
                        ${topic}
                    </div>
                </div>
            `)
        }
        else {
            return (`
            `)
        }
    }
    
    const Username = () => {
        if (username !== '') {
            return (`
                <div class="row gx-0">
                    <div class="wd-account">
                        <div class="wd-title float-start fw-bold">
                            ${username}
                        </div>
                        <div class="wd-verified">
                            <img src="./images/verified.png" class="wd-verified-icon float-start ms-1 me-1" style="margin-top: 3px;">
                        </div>
                        <div class="wd-time text-secondary">
                            - ${time}
                        </div>
                    </div>
                </div>
            `)
        }
        else {
            return (`
            `)
        }
    }
    
    const Description = () => {
        if (title !== '') {
            return (`
                <div class="row gx-0">
                    <div class="wd-description fw-bold">
                        ${title}
                    </div>
                </div>
            `)
        }
        else {
            return (`
            `)
        }
    }
    
    const Tweets = () => {
        if (tweets !== "") {
            return (`
                <div class="row gx-0">
                    <div class="wd-tweets text-secondary">
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