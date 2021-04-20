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

const groupedOptions = [
  {
    label: "Food",
    options: [
      { value: "Hmb", name: "Hamburger" },
      { value: "pizza", name: "Pizza" },
      { value: "chicken", name: "Fried Chicken" },
    ],
  },

  {
    label: "Drinks",
    options: [
      { value: "cola", name: "CocaCola" },
      { value: "lmnd", name: "Lemonade" },
      { value: "Beer", name: "Beer" },
    ],
  },
];

const styles = {
  backgroundColor: "yellow",
  backgroundColorOnSelect: "orange",
  backgroundColorOnHover: "pink",
  fontColorOnSelect: "blue",
  fontColor: "tomato",
  labelColor: "blue",
  labelBackgroundColor: "tomato",
  width: "500px",
  height: "100px",
  maxHeignt: "300px",
};

function App() {
  let custom_value = [];
  const handleOnchangeOutside = (e) => {
    custom_value = e;
    console.log(custom_value);
  };
  return (
    <div className="container">
      <Dropdown
        // classNamePrefix="dd-custom"
        placeholder="Choose an Option"
        options={groupedOptions}
        // options={items}
        search
        multiSelect
        // alwaysOpen
        emptyMessage="Not Found"
        // optionsLimit="4"
        value={custom_value}
        onChange={handleOnchangeOutside}
        grouped
        styles={styles}
      />
    </div>
  );
}

export default App;
