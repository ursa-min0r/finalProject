import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";
import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";
const DefaultLayout = ({ children, noNavbar, location, noFooter }) => (
  <Container fluid>
    <Row>
      {location.pathname !== "/login" ? <MainSidebar /> : null}
      
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        {!noNavbar && <MainNavbar />}
        {children}
        {!noFooter && <MainFooter />}
      </Col>
    </Row>
      {console.log (location)}
  </Container>
);
DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};
DefaultLayout.defaultProps = {
  noNavbar: true,
  noFooter: true,
};
export default DefaultLayout;

