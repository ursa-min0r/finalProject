import React from "react";
import { Card, CardBody, } from "shards-react";

import "../views/dashcomponents/dash.css"



class Dashboard extends React.Component {
  render() {
    return (
      <Card className="dashcontain">
        <CardBody className="dashwrapper">


          <center>
            <img
            src={require("../../src/images/loginimagefix.PNG")} alt="Header" width="1003px" height="871px" align="center" 
            />
          </center>





        </CardBody>
      </Card>


      /*<Card className="forumwrap">
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
    </Card>*/
    )
  }
}

export default Dashboard;
