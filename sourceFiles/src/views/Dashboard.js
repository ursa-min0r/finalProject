import React from "react";
import { Card, CardBody, } from "shards-react";

import "../views/dashcomponents/dash.css"
import Meetups from "./Meetups";
import Community from "./Community";
import Tutorials from "./Tutorials";


class Dashboard extends React.Component {
  render() {
    return (
      <Card className="dashcontain">

        <Card className="meetupswrap">
          <CardBody className="meetupheader">
            <div className="imageButton">
              <a href="http://localhost:3000/meetups">
              <img
                src={require("../../src/images/2.png")} alt="Header" width="1000px" height="100px" className="center" />
           </a>  
           <Meetups />
            </div>
           
             
               
         
          </CardBody>
        </Card>


        <Card className="forumwrap">
          <CardBody className="forumheader">
            <div className="imageButton">
              <a href="http://localhost:3000/add-new-post">
              <img
                src={require("../../src/images/3.png")} alt="Header" width="1000px" height="100px" className="center" />
            </a>
            <Community />
            </div>
        
          </CardBody>
        </Card>


        <Card className="tutorwrap">
          <CardBody className="tutorheader">
            <div className="imageButton">
              <a href="http://localhost:3000/tutorials">
              <img
                src={require("../../src/images/4.png")} alt="Header" width="1000px" height="100px" className="center" />
           </a> 
           <Tutorials />
           </div>
     
          </CardBody>
        </Card>
      </Card>
    )
  }
}

export default Dashboard;
