import React from "react";

const WhoToFollowListItem = ({
  who = {
    avatarIcon: "./../../images/nasa.png",
    userName: "NASA",
    handle: "NASA",
  },
}) => {
  return (
    <li className="list-group-item">
      <img src={who.avatarIcon} className="wd-avatarIcon rounded-circle" />
      <button className="btn btn-primary float-end rounded-pill mt-1">
        Follow
      </button>

      <div className="row">
        <div className="wd-follow-name fw-bold">
          {who.userName}
          <img
            src={"./../../images/verified.png"}
            className="wd-verified-icon ms-1"
          />
        </div>
      </div>

      <div className="row">
        <div className="wd-account-tag">@{who.handle}</div>
      </div>
    </li>
  );
};

export default WhoToFollowListItem;
