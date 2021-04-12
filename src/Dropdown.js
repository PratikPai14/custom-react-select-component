import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import tick from "./tick.svg";
function Dropdown({ placeholder, options, multiSelect = false }) {
  // let displayString = "";
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  function handleOnClick(option) {
    if (!selection.some((current) => current.id === option.id)) {
      if (!multiSelect) {
        setSelection([option]);
      } else if (multiSelect) {
        setSelection([...selection, option]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== option.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isOptionInSelection(option) {
    if (selection.some((current) => current.id === option.id)) {
      return true;
    }
    return false;
  }

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header__placeholder">
          {selection.length === 0 ? (
            <p className="dd-header__placeholder--bold">{placeholder}</p>
          ) : (
            <p className="dd-header__placeholder--bold">
              {selection
                .reduce((total, curr) => {
                  return total + ", " + curr.value;
                }, "")
                .substring(1)}
            </p>
          )}
        </div>
        <div className="dd-header__action">
          <p>{open ? "Close" : "Open"}</p>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {options.map((option) => (
            <li className="dd-list-option" key={option.id}>
              <button type="button" onClick={() => handleOnClick(option)}>
                <span>{option.value}</span>
                {isOptionInSelection(option) ? (
                  <>
                    <img src={tick} alt="" width="20px" />
                  </>
                ) : (
                  ""
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
