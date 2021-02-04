import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption/InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post/Post";
import Axios from "axios";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../../Store/Userslice/Userslice";
import { useHistory } from "react-router";

const Feed = () => {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const [refresh, setRefresh] = useState(true);
  function compare(a, b) {
    if (a.timestamp < b.timestamp) {
      return -1;
    }
    if (a.timestamp > b.timestamp) {
      return 0;
    }
    return 0;
  }
  useEffect(() => {
    Axios.get("http://localhost:5000/getPosts").then((response) => {
      let temp = [];
      for (let i in response.data.Object) {
        temp.push({
          id: i,
          data: {
            name: response.data.Object[i].name,
            description: response.data.Object[i].description,
            message: response.data.Object[i].message,
            photoUrl: response.data.Object[i].photoUrl,
          },
        });
      }
      temp.sort(compare);
      setPosts(temp);
    });
  }, []);

  const sendPost = (event) => {
    event.preventDefault();
    const newPost = {
      name: user ? user.name : "Ankit",
      description: "Hello Ankit",
      message: input,
      photoUrl: user ? user.photoUrl : " ",
      timestamp: new Date().getTime(),
    };
    axios
      .post("http://localhost:5000/sendPosts", newPost)
      .then((response) => {});
    setRefresh((refresh) => !refresh);
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <label>Message</label>
          <form>
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
        return (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        );
      })}
    </div>
  );
};
export default Feed;
