import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import services from "../../services";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomCard from "../../components/CustomCard/CustomCard";

const MainPage = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    services.Quotes.randomQuotes().then((response) =>
      setQuotes(response.quotes)
    );
  }, []);
  const DisplayQuotes = (arr) => {
    const listItems = arr.map((item, index) => (
      <Col className="mt-2 mb-2" key={index} md={12} xs={12}>
        <CustomCard>
          <Row>
            <Col className="text-center mb-3" xs={12}>
              <u>{item.author}</u>
            </Col>
            <Col className="text-center">{item.body}</Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col className="text-center" md={3} xs={4}>
              <Button>Upvote</Button>
            </Col>
            <Col className="text-center" md={3} xs={4}>
              <Button>DownVote</Button>
            </Col>
          </Row>
        </CustomCard>
      </Col>
    ));
    return listItems;
  };
  const Fetching = () => {
    return <p className="text-white">fetching Quotes...</p>;
  };
  return (
    <div className="page">
      <Header />
      <h4 className="mt-3 text-white text-center">Random Quotes</h4>
      <Container>
        <Row>{quotes !== undefined ? DisplayQuotes(quotes) : Fetching()}</Row>
      </Container>
    </div>
  );
};

export default MainPage;
