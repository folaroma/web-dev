import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import { useSelector } from "react-redux";

const selectAllWho = (state) => state.who.who;

const WhoToFollowList = () => {
  const who = useSelector(selectAllWho);
  const list = () => {
    return (
      <ul className="list-group w-100">
        <li className="list-group-item fw-bold">Who to follow</li>
        {who.map((who) => {
          return <WhoToFollowListItem who={who} />;
        })}
      </ul>
    );
  };
  return list();
};

export default WhoToFollowList;
