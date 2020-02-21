import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import CompleteForm from "../components/UrlFormContainer.js/UrlForm";

const UrlContainer = () => (
  <div>
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="URL Shortener"
          subtitle="Overview"
          className="text-sm-left"
        />
      </Row>

      <Row>
        <Col lg="8" className="mb-4">
          {/* Complete Form Example */}
          <Card small>
            <CardHeader className="border-bottom">
              <h6 className="m-0">Enter the URL to be shortened</h6>
            </CardHeader>
            <CompleteForm />
          </Card>
          <br></br>
        </Col>
      </Row>
    </Container>
  </div>
);

export default UrlContainer;
