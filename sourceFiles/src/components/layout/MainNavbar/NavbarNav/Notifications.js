import React from "react";
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleNotifications = this.toggleNotifications.bind(this);
  }

  toggleNotifications() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <NavItem className="border-right dropdown notifications">
        <NavLink
          className="nav-link-icon text-center"
          onClick={this.toggleNotifications}
        >
          <div className="nav-link-icon__wrapper">
            <i className="material-icons">notification_important</i>
            <Badge variant="warning" pill theme="warning">
              2
            </Badge>
          </div>
        </NavLink>
        <Collapse
          open={this.state.visible}
          className="dropdown-menu dropdown-menu-small"
        >
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="material-icons">comment</i>
              </div>
            </div>
            <div className="notification__content">
              <span className="notification__category">Blog</span>
              <p>
                You have a new comment on your post!
              </p>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="material-icons">live_help</i>
              </div>
            </div>
            <div className="notification__content">
              <span className="notification__category">Community</span>
              <p>
                Someone asked you a question!
              </p>
            </div>
          </DropdownItem>
          <DropdownItem className="notification__all text-center">
            View all Notifications
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
