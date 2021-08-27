import React from "react";
import CustomCard from "../../components/CustomCard/CustomCard";
import Header from "../../components/Header/Header";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { useInput } from "../../hooks/useInput";
import services from "../../services";
const Login = () => {
  const { value: login, bind: bindLogin, reset: resetLogin } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Credentials: ${login} ${password}`);
    const user= {
        login:login,
        password:password,
    }
services.Session.login(user).then(response => console.log(response))
  .catch((error) => {
    console.error('Error:', error);
  });
    resetLogin();
    resetPassword();
  };
  return (
    <div className="page">
      <Header />
      <Container fluid className="text-center mt-5">
        <Row className="d-flex justify-content-center">
            <h1 className="text-white mb-3">The QuoteBonanza!</h1>
          <Col md={6} sm={6}>
            <CustomCard>
              <Form onSubmit={handleSubmit}>
                <Container>
                  <Row className="d-flex justify-content-center">
                    <Col className="mt-3" md={12} xs={12}>
                      <Form.Group controlId="4">
                        <Form.Label className="text-black-50 fs-5 small mb-0 ">
                          Login
                        </Form.Label>
                        <Form.Control className="" type="text" {...bindLogin} />
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
                    <Row>
                      <Col md={12} xs={12}>
                        <Form.Group className="mt-2 text-right small mb-0">
                          <a href="/" className="text-warning">
                            Forgot your password?
                          </a>
                        </Form.Group>
                      </Col>
                      <Col className="mt-2" md={12} xs={12}>
                        <Form.Group className="text-right small mb-0">
                          <a href="/registration" className="text-warning">
                            Register
                          </a>
                        </Form.Group>
                      </Col>
                    </Row>
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

export default Login;
