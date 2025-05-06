import { useState } from "react";
import "./App.css";
import Card from "./Card.jsx";

function App() {
  const defaultDate = new Date();
  const [item, setItem] = useState("");
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState("");
  const [date, setdate] = useState("");

  return (
    <Card Item="Grocery" category="Grocerys" cost={15.99} Date={defaultDate} />
  );
}
export default App;
