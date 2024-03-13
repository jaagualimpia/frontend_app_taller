"use client"

import { postRandomForestClassifierInfo } from "@/services/models.service";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

interface formDataProps {
  username: string
  maxDepth: number
  criterion: string
}

export default function RandomForestPage() {
  const [formData, setFormData] = useState<formDataProps>({
    username: `Desconocido-${Math.floor(Math.random() * 100000)}`,
    maxDepth: 5,
    criterion: "log_loss"
  })

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      ["criterion"]: event.target.value
    })
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await postRandomForestClassifierInfo(
      formData.username,
      formData.maxDepth,
      formData.criterion).then((response) => {
        console.log(response)
      })
  }

  return (
    <>
      <p className="fs-3 fw-bold text-center my-3">
        Ingresa los datos para el modelo <i>&quot; Random Forest Classifier &quot;</i>
      </p>

      <Container>
        <Form onSubmit={onSubmitHandler}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicNameField">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="username" placeholder="Ingresa tu nombre" onChange={handleOnChange} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicMaxDepthField">
                <Form.Label>Maxima profundidad del arbol</Form.Label>
                <Form.Control type="number" name="maxDepth" placeholder="Ingresa la profundidad maxima" onChange={handleOnChange} min={0} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicCriterionField">
                <Form.Label>Criterio</Form.Label>
                <Form.Select name="criterion" onChange={handleOnSelect}>
                  <option value="gini">Gini</option>
                  <option value="log_loss">Log loss</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Button variant="success" type="submit">Crear modelo</Button>
          </Row>
        </Form>
      </Container>
    </>
  );
}