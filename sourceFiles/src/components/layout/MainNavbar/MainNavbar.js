import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Container, Navbar } from "shards-react";
import NavbarSearch from "./NavbarSearch";
import NavbarNav from "./NavbarNav/NavbarNav";
import NavbarToggle from "./NavbarToggle";
import "../MainNavbar/NavbarNav/navBar.css";

const MainNavbar = ({ layout, stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    "bg-light",
  /*stickyTop && "sticky-top"*/
  );

  return (
    <div className={classes}>
      <Container className="p-2">
        <Navbar type="default" className="align-items-stretch flex-md-nowrap p-0">
           
           <NavbarSearch /> 
           <NavbarNav />
           <NavbarToggle />
        </Navbar>
      </Container>
    </div>
  );
};

MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool
};

MainNavbar.defaultProps = {
  stickyTop: false
};

export default MainNavbar;
