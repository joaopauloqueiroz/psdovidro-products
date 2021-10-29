import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Input,
  Button,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

import api from "../services/api";
import "../assets/css/list.css";

export default function List() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    list();
  }, []);

  async function list() {
    const response = await api.get("products");
    setData(response.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.get(`products/${name}`);
      setData(response.data);
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  }
  return (
    <Container>
      <h2>Lista de Produtos</h2>
      <Form onSubmit={handleSubmit}>
        <Row md="12" className="mb-3">
          <Col md="4">
            <FormGroup>
              <Input
                onChange={(e) => setName(e.target.value)}
                placeholder="insira o nome do produto pra buscar"
              />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Button>Buscar</Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
      <Row md="12">
        {data.map((item) => (
          <Col md="4">
            <Card className="d-100 h-100">
              <CardBody>
                <a href={item.url} target="_blank">
                  <img
                    className="product-list"
                    src={item.url}
                    alt="Imagem do produto"
                  />
                </a>
              </CardBody>
              <CardFooter className="bg-white">
                <Label className="title-size">{item.title}</Label>
                <br />
                <Label className="description-size">{item.description}</Label>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
