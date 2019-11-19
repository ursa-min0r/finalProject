import React from "react";
import { Container } from "shards-react";
import PageTitle from "../components/common/PageTitle";

const Tutorials = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <PageTitle  title="Tutorials" subtitle="Learn something awesome!" md="12" className="ml-sm-auto mr-sm-auto" />
    <div className="error">
      <div className="error__content">
      </div>
    </div>
  </Container>
);

export default Tutorials;
