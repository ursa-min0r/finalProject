import React from "react";
import "../views/dashcomponents/dash.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashcontain">
        <div className="pagehead">
          <h1>What's New</h1>
        </div>
        <div className="catname">
          <div className="meetsandevents">
          <div className="meeteventhead">
            <p>Meetups and Events</p>
          </div>
          <div className="catcontent">
            <div className="box">
              <p>item</p>
            </div>
            <div className="box">
              <p>item</p>
            </div>
            <div className="box">
              <p>item</p>
            </div>
            <div className="box">
              <p>item</p>
            </div>
          </div>
          </div>
          <div className="newshead">
            <p>News</p>
          </div>
          <div className="tutorialshead">
            <p>Recommended Tutorials</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
