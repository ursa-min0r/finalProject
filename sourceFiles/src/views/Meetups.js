import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Button
} from "shards-react";



class Meetups extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
      PostsListThree: []
    };
  }
  componentDidMount() {
    // Third list of posts.
    this.setState({
      PostsListThree: [
        {
          author: "John James",
          authorAvatar: require("../images/john_avatar.jpg"),
          title: "Starbucks Frontend Developer Meetup!",
          body:
            "Hey guys! All frontend developers welcome, we'll be meeting at the Starbucks off of Walnut Hill at 2:00pm.",
          date: "14 November 2019"
        },
        {
          author: "Amy Fuller",
          authorAvatar: require("../images/amy_avatar.jpg"),
          title: "Crypto Talk",
          body:
            "Looking for anybody in Dallas who is interested in crypto. Going over the latest happenings in the market. Let's meet at Mimi's off of Northwest Hwy at around 3:30. ",
          date: "16 November 2019"
        },
        {
          author: "Harmonic Software",
          authorAvatar: require("../images/scriptHubButton.png"),
          title:
            "Software Development Gathering",
          body:
            "All skill levels welcome. All programming languages. Meet new people! Meet at the Dallas Makerspace at 2:00. ",
          date: "17 November 2019"
        },
        {
          author: "John James",
          authorAvatar: require("../images/scriptHubButton.png"),
          title: "Tech Trends",
          body:
            "It abode words began enjoy years no do ﻿no. Tried spoil as heart visit blush or. Boy possible blessing sensible set but margaret interest. Off tears...",
          date: "29 February 2019"
        },
        {
          author: "John James",
          authorAvatar: require("../images/scriptHubButton.png"),
          title: "Womens Coding Meetup!",
          body:
            "It abode words began enjoy years no do ﻿no. Tried spoil as heart visit blush or. Boy possible blessing sensible set but margaret interest. Off tears...",
          date: "29 February 2019"
        },
        {
          author: "John James",
          authorAvatar: require("../images/scriptHubButton.png"),
          title: "ReactJS Dallas Meetup",
          body:
            "It abode words began enjoy years no do ﻿no. Tried spoil as heart visit blush or. Boy possible blessing sensible set but margaret interest. Off tears...",
          date: "29 February 2019"
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
    );
  }
}

export default Meetups;
