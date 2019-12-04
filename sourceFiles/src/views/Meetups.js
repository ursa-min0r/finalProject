import React from "react";
import { Container, Card, CardBody, Row, Col, CardFooter, Button, } from "shards-react";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";



  



class Meetups extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      PostsListThree: [
        {
          author: "Dwight Schrute",
          authorAvatar: require("../images/profilephotosmall6.png"),
          title: "Database discussion at Starbucks",
          body:
            "Discuss the pros and cons of different database structures. Come join in a fast pace discussion to determine the best databases for jobs.",
          date: "5 December 2019"
        },
        {
          author: "Brandi Maxxxx",
          authorAvatar: require("../images/profilephotosmall5.png"),
          title: "Women developers meetup at Barnes and Noble",
          body:
            "Are you a lady? Do you code? Are you searching for a similar bunch of ladies to discuss code with? Come meet a group of fantastic women at Barnes and Noble.",
          date: "5 December 2019"
        },
        {
          author: "Smitty WerbenJagerManJensen",
          authorAvatar: require("../images/profilephotosmall4.png"),
          title:
            "Pizza Hut Hack-A-Thon!",
          body:
            "Have a slice of pie and hack your way to a number of prizes. Will be hosting several competitions to showcase contestants skills.",
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
                        <div className="card-post__author-avatar-author-avatar--large" >
                          <img src={post.authorAvatar} alt="{ }" width="50px" height="50px" />
                        </div>
                        <div className="d-flex flex-column justify-content-center ml-3">
                          <span className="card-post__author-name small">
                            {post.author}
                          </span>
                          <small className="text-muted">{post.date}</small>
                        </div>
                      </div>
                    </CardFooter>
                    <CardFooter>

                      <Button size="sm-btn btn-block" theme="dark">
                        <i class="material-icons">favorite</i> Like </Button>
                      <br></br>
                      <Button size="sm-btn btn-block" theme="dark">
                        <i class="material-icons">add_comment</i> Comment </Button>

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




export default Meetups;


