import React from "react";
import { Container, Card, CardBody, Row, Col, CardFooter, Button, } from "shards-react";
import Editor from "../components/add-new-post/Editor";



class Meetups extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      PostsListThree: [
        {
          author: "John James",
          authorAvatar: "",
          title: "Database discussion at Starbucks",
          body:
            "Discussion the pros and cons of different database structures. Come join in a fast pace discussion to determine the best databases for jobs.",
          date: "5 December 2019"
        },
        {
          author: "Jenna Talis",
          authorAvatar: "",
          title: "Women developers meetup at Barnes and Noble",
          body:
            "Are you a lady? Do you code? Are you searching for a similar bunch of ladies to discuss code with? Come meet a group of fantastic women at Barnes and Noble.",
          date: "5 December 2019"
        },
        {
          author: "Smitty WerbenJagerManJensen",
          authorAvatar: "",
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


