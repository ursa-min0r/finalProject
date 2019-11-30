import React from "react";
import {
  Container,

} from "shards-react";

import ThreadPostComp from "./ThreadPostComp";

class Meetups extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      PostsListThree: []
    };
  }
  /*componentDidMount() {
    // Third list of posts.
    this.setState({
      PostsListThree: [
        {
          author: "John James",
          authorAvatar: require("../images/scriptHubButton.png"),
          title: "Starbucks Frontend Developer Meetup!",
          body:
            "Hey guys! All frontend developers welcome, we'll be meeting at the Starbucks off of Walnut Hill at 2:00pm.",
          date: "14 November 2019"
        },
        {
          author: "Amy Fuller",
          authorAvatar: require("../images/scriptHubButton.png"),
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

      ]
    });
  }*/

  render() {
    return (
      <Container>{ThreadPostComp}</Container>

    )
  }
}

export default Meetups;

