import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOptions from "./HeaderOptions/HeaderOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Rishu from "./HeaderOptions/Rishu_Less_size.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../../Store/Userslice/Userslice";
import { useHistory } from "react-router";

const Header = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const history = useHistory();
  const logOutOfApp = () => {
    dispatch(logout());
    history.push("/");
  };

  const handleJobClick = (e) => {
    if (user.type === "developer") {
      history.push("/developerJobs");
    }
  };
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />

        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="MyNetwork" />
        <HeaderOptions
          Icon={BusinessCenterIcon}
          title="Jobs"
          onClick={handleJobClick}
        />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions
          avatar="Nothing"
          title="Me"
          onClick={props.onProfileClick}
        />
      </div>
    </div>
  );
};

export default Header;
