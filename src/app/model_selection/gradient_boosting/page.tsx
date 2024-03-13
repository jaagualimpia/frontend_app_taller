"use client"

import { postXGBoostClassifierInfo } from "@/services/models.service";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

interface formDataProps {
  username: string
  nEstimators: number
  loss: string
  learningRate: number
}

export default function GradientBoosting() {
  const [formData, setFormData] = useState<formDataProps>({
    username: `Desconocido-${Math.floor(Math.random() * 100000)}`,
    nEstimators: 3,
    loss: "log_loss",
    learningRate: 0.1
  })

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleOnDecimalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (/^\d*\.?\d*$/.test(newValue) && parseFloat(newValue) < 1) {
      setFormData({
        ...formData,
        ["learningRate"]: parseFloat(newValue)
      })
    }

    console.log(newValue)
  };


  const handleOnSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      ["loss"]: event.target.value
    })
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await postXGBoostClassifierInfo(
      formData.username,
      formData.loss,
      formData.nEstimators,
      formData.learningRate
      ).then((response) => {
        console.log(response)
      })
  }

  return (
    <>
      <p className="fs-3 fw-bold text-center my-3">
        Ingresa los datos para el modelo <i>&quot; Extreme Gradient Boosting Classifier &quot;:</i>
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
                <Form.Label>Número de estimadores del modelo</Form.Label>
                <Form.Control type="number" name="nEstimators" placeholder="Ingresa la profundidad maxima" onChange={handleOnChange} min={0} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicLossField">
                <Form.Label>Función de perdida</Form.Label>
                <Form.Select name="loss" onChange={handleOnSelect}>
                  <option value="gini">Gini</option>
                  <option value="log_loss">Log loss</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="formBasicCriterionField">
                <Form.Label>Tasa de aprendizaje</Form.Label>
                <Form.Control type="text" name="learningRate" placeholder="Ingresa decimales menores a 1" onChange={handleOnDecimalChange} min={0} max={1}/>
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