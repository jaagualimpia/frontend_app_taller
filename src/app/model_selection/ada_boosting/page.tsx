"use client"

import { postAdaBoostClassifierInfo, postXGBoostClassifierInfo } from "@/services/models.service";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

interface formDataProps {
  username: string
  nEstimators: number
  learningRate: number
}

export default function AdaBoostingPage() {
  const [formData, setFormData] = useState<formDataProps>({
    username: `Desconocido-${Math.floor(Math.random() * 100000)}`,
    nEstimators: Math.floor(Math.random() * 10),
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

  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await postAdaBoostClassifierInfo(
      formData.username,
      formData.learningRate,
      formData.nEstimators,
      ).then((response) => {
        console.log(response)
      })
  }

  return (
    <>
      <p className="fs-3 fw-bold text-center my-3">
        Ingresa los datos para el modelo <i>&quot; Ada Boost Classifier &quot;:</i>
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
              <Form.Group className="mb-3" controlId="formBasicNEstimatorsField">
                <Form.Label>Número de estimadores del modelo</Form.Label>
                <Form.Control type="number" name="nEstimators" placeholder="Ingresa el numero de estimadores del modelo" onChange={handleOnChange} min={0} />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="formBasicLearningRateField">
                <Form.Label>Tasa de aprendizaje</Form.Label>
                <Form.Control type="text" name="learningRate" placeholder="Ingresa decimales menores a 1" onChange={handleOnDecimalChange}/>
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