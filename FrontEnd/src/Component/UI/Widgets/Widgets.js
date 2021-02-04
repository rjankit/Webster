import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets_article">
        <div className="widgets_articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets_articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>
          Webster News
          <InfoIcon />
        </h2>
      </div>

      {newsArticle("Ankit Raj is pro", "Top news")}
      {newsArticle("Ashutosh is pro", "Top news")}
      {newsArticle("Neeraj is pro", "Top news")}
      {newsArticle("Ojaswi is pro", "Top news")}
    </div>
  );
};

export default Widgets;
