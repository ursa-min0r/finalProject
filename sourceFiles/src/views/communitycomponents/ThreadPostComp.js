import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    Button
  } from "shards-react";

class ThreadPostComp extends React.Component {
   constructor(props) {
       super(props);

    this.state = {
        ThreadPostComp: []
    };
 }

 componentDidMount() {
     this.setState({
         ThreadPostComp: [
         {
            author: "John James",
            authorAvatar: require("../images/john_avatar.jpg"),
            title: "Having issues linking my css.",
            body: "Been trying to link my css file forever now and can't seem to get it to work... Any ideas?",
            date: "14 November 2019"
         },
         ]
     });
 }

render() {
    return (
        <Container fluid className="main-content-container px-4">
        {/* Third Row of Posts */}
        <Row>
          {this.state.PostsListThree.map((post, idx) => (
            <Col lg="4" key={idx}>
              <Card small className="card-post mb-4">
                <CardBody>
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text text-muted">{post.body}</p>
                </CardBody>
                <CardFooter className="border-top d-flex">
                  <div className="card-post__author d-flex">
                    <a
                      href="https://www.google.com/"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by James Khan
                    </a>
                    <div className="d-flex flex-column justify-content-center ml-3">
                      <span className="card-post__author-name">
                        {post.author}
                      </span>
                      <small className="text-muted">{post.date}</small>
                    </div>
                  </div>
                  <div className="my-auto ml-auto">
                    <Button size="sm" theme="white">
                      <i className="far fa-bookmark mr-1" /> Save
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )
}
}

export default ThreadPostComp;