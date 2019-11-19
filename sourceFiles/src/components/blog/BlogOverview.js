/* eslint-disable default-case */
/* eslint-enable default-case */
import React from "react";
import { Container, Row} from "shards-react";

const BlogOverview = (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-5">
      <h1>SCRIPTHUB</h1>
    </Row>
    <div class="row row-dash">
      <div class="col-sm-6">

 
  </div>
    </div>
    
    {/* Small Stats Blocks 
    <Row>
      {smallStats.map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
          <SmallStats
            id={`small-stats-${idx}`}
            variation="1"
            chartData={stats.datasets}
            chartLabels={stats.chartLabels}
            label={stats.label}
            value={stats.value}
            percentage={stats.percentage}
            increase={stats.increase}
            decrease={stats.decrease}
          />
        </Col>
      ))}
    </Row>*/}


    <Row>
      {/* Users Overview 
      <Col lg="8" md="12" sm="12" className="mb-4">
        <UsersOverview />
      </Col>*/}

      {/* Users by Device
      <Col lg="4" md="6" sm="12" className="mb-4">
        <UsersByDevice />
      </Col>

      {/* New Draft 
      <Col lg="4" md="6" sm="12" className="mb-4">
        <NewDraft />
      </Col>*/}

      {/* Discussions 
      <Col lg="5" md="12" sm="12" className="mb-4">
        <Discussions />
      </Col>*/}

      {/* Top Referrals 
      <Col lg="3" md="12" sm="12" className="mb-4">
        <TopReferrals />
      </Col>*/}
    </Row>
  </Container>
);

export default BlogOverview;
