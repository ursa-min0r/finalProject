import React from "react";
import "../views/dashcomponents/dash.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashcontain">
        
        <div className="pagehead">
          <h1>What's New</h1>
        </div>

          <div className="meetupswrap">
            <div className="meetupheader">
              <p>/MEETUPS AND EVENTS</p>
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
              <p>/NEWS</p>
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

          <div className="newswrap">
            <div className="newsheader">
              <p>/FORUM</p>
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

          <div className="newswrap">
            <div className="newsheader">
              <p>/RECOMMENDED TUTORIALS</p>
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
