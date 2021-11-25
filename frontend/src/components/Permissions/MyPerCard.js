import React from "react";
import { Col, Card } from "react-bootstrap";
// import "./MyCard.css";

export default function MyPerCard(props) {
  return (
    <Col>
      <Card className="myCard">
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>{props.type}</Card.Title>
          <Card.Text>{props.place}</Card.Text>
          <Card.Text>{props.numberOfPeople}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
