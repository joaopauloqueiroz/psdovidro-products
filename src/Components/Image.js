import React, { useState } from "react";
import { Input, Label, Col, Row } from "reactstrap";

function Image({ selectImage }) {
  const [files, setFiles] = useState();
  const [path, setPath] = useState("");

  function placeholder() {
    return (
      <Label for="files" className="label-images">
        <span className="span-product-select">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-circle-fill fill-icon"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
        </span>
        <Input
          id="files"
          placeholder="Selecione imagens"
          multiple
          onChange={(evt) => handleFiles(evt)}
          accept="image/png, image/jpeg, image/jpg"
          type="file"
        />
      </Label>
    );
  }

  function placeholderMini() {
    return (
      <Label for="files" className="label-images-mini">
        <span className="span-product-select">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-circle-fill fill-icon"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
        </span>
        <Input
          id="files"
          placeholder="Selecione imagens"
          multiple
          onChange={(evt) => handleFiles(evt)}
          accept="image/png, image/jpeg, image/jpg"
          type="file"
        />
      </Label>
    );
  }

  function handleFiles(event) {
    const { files } = event.target;
    const images = URL.createObjectURL(files[0]);
    setPath(images);
    selectImage(files[0]);
  }

  return (
    <>
      {!path ? (
        placeholder()
      ) : (
        <Row
          className="justify-content-center align-items-center image-box"
          md="12"
        >
          <Col md="6">
            <img
              className="image-preview"
              src={path}
              alt="Imagem selecionada"
            />
          </Col>
          <Col
            className="d-flex pt-3 justify-content-center align-items-center"
            md="6"
          >
            {placeholderMini()}
          </Col>
        </Row>
      )}
    </>
  );
}

export default Image;
