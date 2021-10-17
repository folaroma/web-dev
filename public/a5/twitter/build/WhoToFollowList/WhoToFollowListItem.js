function WhoToFollowListItem(who) {
    return (`
        <li class="list-group-item">
            <img src=${who.avatarIcon} class="wd-avatarIcon rounded-circle">
            <button class="btn btn-primary float-end rounded-pill mt-1">Follow</button>

            <div class="row">
                <div class="wd-follow-name fw-bold">
                    ${who.userName}
                    <img src="./images/verified.png" class="wd-verified-icon">
                </div>
            </div>

            <div class="row">
                <div class="wd-account-tag">
                    @${who.handle}
                </div>
            </div>
        </li>
    `)
}

export default WhoToFollowListItem