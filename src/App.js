import React from "react";
import "./App.scss";
import Dropdown from "./Dropdown";

const items = [
  {
    id: 1,
    value: "Pulp Fiction",
  },
  {
    id: 2,
    value: "The Prestige",
  },
  {
    id: 3,
    value: "Blade Runner 2049",
  },
  {
    id: 4,
    value: "Blade Runner 2049",
  },
  {
    id: 5,
    value: "Blade Runner 2049",
  },
  {
    id: 6,
    value: "Blade Runner 2049",
  },
  {
    id: 7,
    value: "Blade Runner 2049",
  },
  {
    id: 8,
    value: "Blade Runner 2049",
  },
];

function App() {
  return (
    <div className="container">
      <Dropdown placeholder="Choose an Option" options={items} multiSelect />
    </div>
  );
}

export default App;
