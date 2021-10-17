import WhoToFollowListItem from "./WhoToFollowListItem.js"
import who from "../WhoToFollowList/who.js"

function WhoToFollowList() {
    var li = "<li class='list-group-item fw-bold'>Who to follow</li>";

    who.forEach(element => {
        li = li + WhoToFollowListItem(element);
    });

    const list = () => {
        return (`
            <ul class="list-group w-100">
                ${li}
            </ul>
        `)
    }
    return list();
}

export default WhoToFollowList