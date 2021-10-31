import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";

function WhoToFollowList() {

    const list = () => {
        return (
            <ul className="list-group w-100">
                <li className='list-group-item fw-bold'>Who to follow</li>
                {who.map(who => {
                return(<WhoToFollowListItem who={who}/>);})}
            </ul>
        )
    }
    return list();
}

export default WhoToFollowList