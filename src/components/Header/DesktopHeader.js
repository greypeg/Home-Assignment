import React from "react";
import { Row, Col } from "react-bootstrap";
const DesktopHeader = () => {
  return (
    <div className="desktopHeader">
      <Row className="d-flex justify-content-center">
        <Col md={3} xs={3}>
          <a href="/main-page" className="text-black">
            Random Quotes
          </a>
        </Col>
        <Col md={3} xs={3} className="text-center">
          <a href="/registration" className="text-black">
            Registration
          </a>
        </Col>
        <Col md={3} xs={3} className="text-center">
          <a href="/search" className="text-black">
            Search
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default DesktopHeader;
