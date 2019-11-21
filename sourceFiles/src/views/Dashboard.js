import React from "react";
import "../views/dashcomponents/dash.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashcontain">

        <div className="meetupswrap">
          <div className="meetupheader">
            <div className="imageButton"><img
              src={require("../../src/images/2.png")} alt="Header" width="1000px" height="100px" className="center" />
            </div>

          </div>
          <div className="meetupcontent">
            <div className="box">
              <p>Item</p>
            </div>
            <div className="box">
              <p>Item</p>
            </div>
            <div className="box">
              <p>Item</p>
            </div>
            <div className="box">
              <p>Item</p>
            </div>
          </div>
        </div>
        <div className="newswrap">
          <div className="newsheader">
            <div className="imageButton"><img
              src={require("../../src/images/1.png")} alt="Header" width="1000px" height="100px" className="center" />
              </div>
          </div>
          <div className="newscontent">
            <div className="box">
              <p>Item</p>
            </div>
            <div className="box">
              <p>Item</p>
            </div>
            <div className="box">
              <p>Item</p>
            </div>
            <div className="box">
              <p>Item</p>
            </div>
          </div>
        </div>

        <div className="forumwrap">
          <div className="forumheader">
            <div className="imageButton">
            <img
              src={require("../../src/images/3.png")} alt="Header" width="1000px" height="100px" className="center" />
          </div>
          </div>
          <div className="newscontent">
            <div className="box">
              <p>Item</p>
            </div>
            <div className="box">
              <p>Item</p>
            </div>
            <div className="box">
              <p>Item</p>
            </div>
            <div className="box">
              <p>Item</p>
            </div>
          </div>
        </div>

        <div className="tutorwrap">
          <div className="tutorheader">
            <div className="imageButton">
            <img
              src={require("../../src/images/4.png")} alt="Header" width="1000px" height="100px" className="center" />
          </div>
          </div>
          <div className="newscontent">
            <div className="box">
              <p>Item</p>
            </div>
            <div className="box">
              <p>Item</p>
            </div>
            <div className="box">
              <p>Item</p>
            </div>
            <div className="box">
              <p>Item</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
