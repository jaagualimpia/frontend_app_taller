import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function ModelSelectionPage() {
  return (
    <>
      <p className="fs-3 fw-bold text-center">
        Selecciona el modelo que quieras utilizar:
      </p>

      <Container className="mt-5">
        <Row>
          <Col>
            <Row className="text-center my-2 mx-2">
              <Link href="/model_selection/decision_tree" className="btn btn-outline-dark">
                Decision tree Classifier
              </Link>
            </Row>
            <Row className="text-center">
              <img height={200} width={250} src="https://doc.perclass.com/perClass_Toolbox/guide/images/clas_sdtree_1.png" alt="Decisio tree image" />
            </Row>
          </Col>
          <Col >
            <Row className="text-center my-2 mx-2">
              <Link href="/model_selection/random_forest" className="btn btn-outline-dark">
                Random Forest Classifier
              </Link>
            </Row>
            <Row className="text-center">
              <img height={200} width={250} src="https://www.researchgate.net/publication/356167151/figure/fig2/AS:1089305292349441@1636722028201/Random-forest-classifier-illustrated-with-a-decision-tree-graph-Each-node-has-a.ppm" alt="adaBoost image" />
            </Row>
          </Col>
          <Col >
            <Row className="text-center my-2 mx-2">
              <Link href="/model_selection/gradient_boosting" className="btn btn-outline-dark">
                XGradient Boosting Classifier
              </Link>
            </Row>
            <Row className="text-center">
              <img height={200} width={250} src="https://media.geeksforgeeks.org/wp-content/uploads/20210707140911/Boosting.png" alt="adaBoost image" />
            </Row>
          </Col>
          <Col >
            <Row className="text-center my-2 mx-2">
              <Link href="/model_selection/ada_boosting" className="btn btn-outline-dark">
                Ada Boosting Classifier
              </Link>
            </Row>
            <Row className="text-center">
              <img height={200} width={250} src="https://i.ytimg.com/vi/BoGNyWW9-mE/maxresdefault.jpg" alt="adaBoost image" />
            </Row>
          </Col>
        </Row>
      </Container>

    </>
  );
}