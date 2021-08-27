import React from "react";
import CustomCard from "../../components/CustomCard/CustomCard";
import Header from "../../components/Header/Header";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { useInput } from "../../hooks/useInput";
import services from "../../services";
const Registration = () => {
  const { value: login, bind: bindLogin, reset: resetLogin } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Credentials: ${login} ${email} ${password}`);
    const data = {
      login: login,
      email: email,
      password: password,
    };
    services.UserService.createUser(data).then((response) => console.log(response))
    resetEmail();
    resetLogin();
    resetPassword();
  };
  return (
    <div className="page">
      <Header />
      <h4 className="text-white mt-4 text-center">Registration Page</h4>
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
                          Login
                        </Form.Label>
                        <Form.Control className="" type="text" {...bindLogin} />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group controlId="2">
                        <Form.Label className="text-black-50 fs-5 small mb-0 ">
                          Email
                        </Form.Label>
                        <Form.Control
                          className=""
                          type="email"
                          {...bindEmail}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group controlId="2">
                        <Form.Label className="text-black-50 fs-5 small mb-0 ">
                          Password
                        </Form.Label>
                        <Form.Control
                          className=""
                          type="password"
                          {...bindPassword}
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
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
