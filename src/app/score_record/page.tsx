"use client"

import { getClassificationOrderedByScore } from "@/services/classification.service";
import { useEffect, useState } from "react";
import { ClassifactionTableItem } from "../public components/navbar/ClassificationTableItem";
import { ClassificationResultDto } from "@/dtos/classificationResults.dto";
import { Container } from "react-bootstrap";

export default function ScoreRecordPage() {
  const [classificationItems, setClassificationItems] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const result = await getClassificationOrderedByScore()
      setClassificationItems(result.map((element: { [key: string]: any }) => {
        return <ClassifactionTableItem username={element.username} modelName={element.modelName} score={element.score} />
      }))

    }

    fetchData()
  }, [])

  return (
    <>
      <p className="fw-medium fs-2 text-center my-3">
        Esta es la lista de todos los modelos que se han entrenado y sus respectivos puntajes: 
      </p>
      <Container>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombre de usuario</th>
              <th>Modelo entrenado</th>
              <th>Puntaje</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {classificationItems}
          </tbody>
        </table>
      </Container>
    </>
  );
}