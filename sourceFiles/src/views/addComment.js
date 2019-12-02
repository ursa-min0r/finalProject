import React from 'react';
import {
FormGroup,
FormControl,
} from 'react-bootstrap';
import ReactDOM from 'react-dom';



class AddComment extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    if (length > 5) return 'warning';
    if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
         {/* <ControlLabel>Don't be an Asshole, say something productive and helpful</ControlLabel> */}
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
            {...ReactDOM.findDOMNode}
          />
          <FormControl.Feedback />
          
        </FormGroup>
      </form>
    );
  }
}


export default AddComment;