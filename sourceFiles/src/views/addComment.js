import React from "react";


class addComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '/commentHere'
    };
  }
  render() {
    return (
      <form>
      <textarea value={this.state.description} />
      </form>
    );
  }
}
export default addComment; 