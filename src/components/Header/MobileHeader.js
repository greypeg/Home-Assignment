import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const MobileHeader = () => {
  return (
    <div className="mobileHeader">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={3} xs={4} className="text-center">
            <a href="/main-page" className="text-black">
              Random
            </a>
          </Col>
          <Col md={3} xs={4} className="text-center">
            <a href="/registration" className="text-black">
              Registration
            </a>
          </Col>
          <Col md={3} xs={4} className="text-center">
            <a href="/search" className="text-black">
              Search
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MobileHeader;
