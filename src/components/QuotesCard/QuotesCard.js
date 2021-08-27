import React from "react";
import { Col,Row,Button } from "react-bootstrap";
import CustomCard from "../CustomCard/CustomCard";
const QuotesCard = (author, body,key) => {
  return (
    <Col className="mt-2 mb-2" key={key} md={12} xs={12}>
      <CustomCard>
        <Row>
          <Col className="text-center mb-3" xs={12}>
            <u>{author}</u>
          </Col>
          <Col xs={12} className="text-center">{body}</Col>
          <Col xs={6}><Button>UpVote</Button></Col>
          <Col xs={6}><Button>DownVote</Button></Col>
        </Row>
      </CustomCard>
    </Col>
  );
};

export default QuotesCard;
