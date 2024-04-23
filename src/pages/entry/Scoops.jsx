import React from "react";
import { Col } from "react-bootstrap";
export default function Scoops({ name, imagePath }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "cemter" }}>
      <h1>Hello</h1>
      <img src={`http://localhost:3030/${imagePath}`} alt={`${name} scoop`} />
    </Col>
  );
}
