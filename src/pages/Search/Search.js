import React, { useState } from "react";
import CustomCard from "../../components/CustomCard/CustomCard";
import Header from "../../components/Header/Header";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { useInput } from "../../hooks/useInput";
import services from "../../services";

const Search = () => {
  const { value: author, bind: bindAuthor, reset: resetAuthor } = useInput("");
  const [search, setSearch] = useState([]);
  const DisplayQuotes = (arr) => {
    const listItems = arr.map((item, index) => (
      <Col className="mt-2 mb-2" key={index} md={12} xs={12}>
        <CustomCard>
          <Row>
            <Col className="text-center">{item.body}</Col>
          </Row>
        </CustomCard>
      </Col>
    ));
    return listItems;
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const data = {
      author: author,
    };
    services.Quotes.authorBasedQuotes(data.author).then((response) =>
      setSearch(response.quotes)
    );
    
  };
  return (
    <div className="page">
      <Header />
      <h4 className="mt-3 text-white text-center">Search author</h4>
      <Container fluid className="text-left mt-5">
        <Row className="d-flex justify-content-center">
          <Col md={6} sm={6}>
            <CustomCard>
              <Form onSubmit={handleSubmit}>
                <Container>
                  <Row className="d-flex justify-content-center">
                    <Col className="mt-3" md={12} xs={12}>
                      <Form.Group controlId="2">
                        <Form.Label className="text-black-50 text-left fs-5 small mb-0 ">
                          Search Author
                        </Form.Label>
                        <Form.Control
                          className=""
                          type="text"
                          {...bindAuthor}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="mt-3 mb-3" xs={12}>
                      <Button
                        className="customButton"
                        as="input"
                        type="submit"
                        value="Submit"
                      />{" "}
                    </Col>
                  </Row>
                </Container>
              </Form>
            </CustomCard>
          </Col>
          <Col xs={12} className="text-white">{search === undefined ? "Search an author..." : author}</Col>
          <Col xs={12}>{search === undefined ? "" : DisplayQuotes(search)}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
