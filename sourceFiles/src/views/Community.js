import React from "react";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../components/common/PageTitle";

const AddNewPost = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" className="text-sm-left" />
    </Row>
<Row>



</Row>
    <Row>
      {/* Editor */}
      <Col lg="9" md="12">
        
      </Col>

      {/* Sidebar Widgets */}
      <Col lg="3" md="12">
        
      
      </Col>
    </Row>
  </Container>
);

export default AddNewPost;
