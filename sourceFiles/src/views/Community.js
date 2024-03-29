import React from "react";
import { Container, Row, Col, Card, CardBody, CardFooter, Button } from "shards-react";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";




class Community extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      PostsListThree: [
        {
          title: "I'm the 'Chosen One'?",
          author: "Thomas Anderson",
          authorAvatar: require("../images/profilephotosmall.png"),
          topic: "#Question",
          body:
            "I was sleeping and my computer turned on by itself and started typing weird things, is this normal? Thanks.",
          date: "5 December 2019"
        },
        {
          title: "Can't see my profile",
          author: "John Cena",
          authorAvatar: require("../images/profilephotosmall2.png"),
          topic: "#Question",
          body:
            "Can anyone see my profile? I'm getting a lot of comments that it's not showing up.",
          date: "5 December 2019"
        },
        {
          title: "Build a fully functional React-app in ONE MINUTE",
          author: "Jenna Marbles",
          authorAvatar: require("../images/profilephotosmall3.png"),
          topic:
            "#Tutorials",
          body:
            "I build a fully functional React-app in just one minute while wearing 50 pairs of false eyelashes. Don't forget to like and subscribe! Link in my Profile!",
          date: "5 December 2019"
        }
      ]
    };
  };

  render() {
    return (


      <Container fluid className="meet-up-container px-4 pb-4">
         <Row noGutters className="page-header py-4">
          
          </Row>

        <Card small className="mb-3">
          <CardBody>
            {/* Third Row of Posts */}
            <Row>
              {this.state.PostsListThree.map((post, idx) => (
                <Col lg="4" key={idx}>
                  <Card small className="card-post mb-4">
                    <CardBody>
                      <h5 className="card-title">{post.title}</h5>


                      <p className="card-text text-muted">{post.body}</p>
                      <large className="text-normal">{post.topic}</large>
                    </CardBody>
                    <CardFooter className="border-top d-flex">
                      <div className="card-post__author d-flex">
                        <div className="card-post__author-avatar--small" >
                          <img src={post.authorAvatar} alt="{ }" />
                        </div>
                        <div className="d-flex flex-column justify-content-center ml-3">
                          <span className="card-post__author-name small">
                            {post.author}
                          </span>
                          <small className="text-muted">{post.date}</small>
                        </div>

                      </div>
                      <div className="my-auto ml-auto">

                      </div>
                    </CardFooter>

                    <CardFooter>
                      <div>
                        <Button size="sm-btn btn-block" theme="dark">
                          <i class="material-icons">favorite</i> Like </Button>
                        <br></br>
                        <Button size="sm-btn btn-block" theme="dark">
                          <i class="material-icons">add_comment</i> Comment </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
              ))}
            </Row>

          </CardBody>
        </Card>
        <Row>
      {/* Editor */}
      <Col lg="9" md="12">
        <Editor />
       
      </Col>

      {/* Sidebar Widgets */}
      <Col lg="3" md="12">
        <SidebarActions />
        <SidebarCategories />
      </Col>
    </Row>
      </Container>

    )
  }
}





export default Community;