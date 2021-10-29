import React, { Component, useState } from "react";
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

import Image from "../Components/Image";

import "../assets/css/register.css";

import api from "../services/api";

const Product = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!image) {
      alert("A imagem e obrigatória");
      return;
    }

    const data = new FormData();
    data.append("image", image);
    data.append("title", title);
    data.append("description", description);
    try {
      await api.post("/create", data);
      alert("inserido com sucesso");
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  }

  function selectImage(file) {
    setImage(file);
  }

  return (
    <Container>
      <Row md="12">
        <Col
          md="12"
          className="align-items-center justify-content-center text-center"
        >
          <h2>Criar novo cadastro</h2>
        </Col>
      </Row>
      <Row md="12">
        <Form onSubmit={handleSubmit}>
          <Col md="12">
            <FormGroup className="pt-5 d-flex justify-content-center align-items-center">
              <Image selectImage={selectImage} />
            </FormGroup>
          </Col>
          <Row className="mt-5">
            <Col md="6">
              <FormGroup>
                <Label>Titulo do produto</Label>
                <Input
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Espelho 8mm"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>Descrição do produto</Label>
                <Input
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tamanho 40x40"
                />
              </FormGroup>
            </Col>
            <Col md="6" className="mt-3">
              <Button type="submit" color="success" size="lg">
                Criar cadastro
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </Container>
  );
};

export default Product;
