import React from "react";
import { Container, Card, CardBody, Row, Col, CardFooter, Button, } from "shards-react";
import Editor from "../components/add-new-post/Editor";



class Meetups extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      PostsListThree: []
    };
  };

  render() {
    return (


      <Container fluid className="meet-up-container px-4 pb-4">

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
                    </CardBody>
                    <CardFooter className="border-top d-flex">
                      <div className="card-post__author d-flex">
                        <a
                          href="https://www.google.com/"
                          className="card-post__author-avatar card-post__author-avatar--small"
                          style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                        >
                        </a>
                        <div className="d-flex flex-column justify-content-center ml-3">
                          <span className="card-post__author-name">
                            {post.author}
                          </span>
                          <small className="text-muted">{post.date}</small>
                        </div>
                      </div>
                      <div className="my-auto ml-auto">
                        <Button size="sm" theme="dark">
                          <i className="far fa-bookmark mr-1" /> Save
                    </Button>
                      </div>
                      <div>
                        <Editor />
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
              ))}
            </Row>

          </CardBody>
        </Card>


      </Container>

    )
  }
}



export default Meetups;


