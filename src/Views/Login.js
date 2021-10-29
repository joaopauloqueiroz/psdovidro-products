import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Input,
  Button,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import "../assets/css/login.css";
import logo from "../assets/images/logo.png";

export default class Login extends Component {
  render() {
    return (
      <Container className="container-login">
        <Row
          md="12"
          className="d-flex justify-content-center align-items-center align-content-center row-login"
        >
          <Col md="4" sm="12" className="">
            <Card className="card-login border-rounded">
              <div className="img-container align-items-center text-center">
                <img src={logo} alt="PS do Vidro" />
              </div>
              <CardBody className="pt-0 mt-0">
                <Form className="w-70">
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="E-mail"
                    />
                  </FormGroup>
                  <FormGroup className="mt-3">
                    <Label for="senha">Senha</Label>
                    <Input placeholder="Senha" id="senha" type="password" />
                  </FormGroup>
                  <FormGroup className="align-items-center text-center mt-3">
                    <Button color="danger" size="lg">
                      ENTRAR
                    </Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
