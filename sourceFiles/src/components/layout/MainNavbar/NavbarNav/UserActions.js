import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

import UserDetails from "../../../user-profile-lite/UserDetails";

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
    // console.log(UserDetails.defaultProps.name)
  }

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>


        <DropdownToggle caret tag={NavLink} className="text-nowrap px-5">
          <img className="rounded-circle" src={require("../../../../images/profilePhoto.jpeg")} alt="ProfilePhoto" width="75px" height="75px" align="center"  />
          <span className="d-none d-md-inline-block text-dark text-large"> Welcome, {UserDetails.defaultProps.userDetails.name} !</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right large open={this.state.visible}>
          <DropdownItem tag={Link} to="user-profile-lite ">
            <i className="material-icons">edit</i> Edit Profile
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag={Link} to="/" className="text-danger">
            <i className="material-icons text-danger">cancel</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
