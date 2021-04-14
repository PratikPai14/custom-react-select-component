import React from "react";
import "./App.scss";
import Dropdown from "./Dropdown";

const items = [
  {
    value: "pulp",
    name: "Pulp Fiction",
    disabled: true,
  },
  {
    value: "prestige",
    name: "The Prestige",
  },
  {
    value: "bld",
    name: "Blade Runner 2049",
  },
  {
    value: "aot",
    name: "Attack on Titan",
  },
  {
    value: "si",
    name: "Shutter Island",
  },
  {
    value: "endgame",
    name: "Avengers Endgame",
  },
  {
    value: "tr",
    name: "Thor Ragnarok",
  },
  {
    value: "ca",
    name: "Captain America ",
  },
];

function App() {
  // let custom_value = [{ value: "mrz", name: "Mirzapur" }];
  // const handleOnchangeOutside = (e) => {
  //   custom_value = e;
  //   console.log(custom_value);
  // };
  return (
    <div className="container">
      <Dropdown
        classNamePrefix="dd-custom"
        // placeholder="Choose an Option"
        options={items}
        // search
        multiSelect
        // alwaysOpen
        emptyMessage="Not Found"
        // optionsLimit="4"
        // value={custom_value}
        // onChange={handleOnchangeOutside}
      />
    </div>
  );
}

export default App;
