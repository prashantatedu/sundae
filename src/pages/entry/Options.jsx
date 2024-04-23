import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Scoops from "./Scoops";
import { Row } from "react-bootstrap";

export default function Options({ optionsTypes }) {
  const [items, setItems] = useState([]);
  // optionsTypes is scoops or toppings
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionsTypes}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [optionsTypes]);

  //replace with null with Toppings
  const ItemComponent = optionsTypes === "scoops" ? Scoops : null;
  const optionItems = items.map((item) => {
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagepath}
    />;
  });

  return <Row>{optionItems}</Row>;
}
