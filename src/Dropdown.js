import React, { useState } from "react";

import OptionList from "./OptionList";
import Header from "./Header";
import fuzzySearch from "./fuzzySearch";
import OutsideClickWrapper from "./OutsideClickWrapper";
import handleInitialSelection from "./handleInitialSelection";
import className from "./className";
function Dropdown({
  classNamePrefix = "",
  placeholder = "",
  options,
  search = false,
  multiSelect = false,
  emptyMessage,
  optionsLimit,
  alwaysOpen = false,
  value = [],
  onChange = () => {
    "";
  },
  grouped = false,
  styles = {
    backgroundColorOnSelect: "",
    backgroundColorOnHover: "",
    fontColor: "",
    fontFamily: "",
    width: "",
    height: "",
    maxHeight: "",
  },
}) {
  const [query, setQuery] = useState("");
  const [showSelected, setShowSelected] = useState(true);
  const [open, setOpen] = useState(alwaysOpen);
  const [selection, setSelection] = useState(
    handleInitialSelection(value, placeholder, options, grouped)
  );
  const toggle = () => setOpen(!open);

  function handleOnClick(option) {
    if (!selection.some(({ value }) => value === option.value)) {
      if (!multiSelect) {
        setSelection([option]);
        onChange([option]);
        return;
      } else if (multiSelect) {
        setSelection([...selection, option]);
        onChange([...selection, option]);
        return;
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        ({ value }) => value !== option.value
      );
      setSelection([...selectionAfterRemoval]);
      onChange([...selectionAfterRemoval]);
      return;
    }
  }

  const results = fuzzySearch(query, options, grouped);
  const optionsResults = query
    ? results?.slice(0, optionsLimit).map((result) => result.item)
    : options?.slice(0, optionsLimit);

  function handleSearchChange({ currentTarget = {} }) {
    const { value } = currentTarget;
    setQuery(value);
  }

  return (
    <OutsideClickWrapper
      setOpen={setOpen}
      setShowSelected={setShowSelected}
      alwaysOpen={alwaysOpen}
    >
      <div className={className(classNamePrefix, "wrapper")}>
        <Header
          toggle={toggle}
          showSelected={showSelected}
          setShowSelected={setShowSelected}
          query={query}
          handleSearchChange={handleSearchChange}
          placeholder={placeholder}
          open={open}
          setOpen={setOpen}
          selection={selection}
          search={search}
          alwaysOpen={alwaysOpen}
          styles={styles}
          classNamePrefix={classNamePrefix}
        />

        {open && (
          <OptionList
            selection={selection}
            handleOnClick={handleOnClick}
            optionsResults={optionsResults}
            emptyMessage={emptyMessage}
            grouped={grouped}
            styles={styles}
            classNamePrefix={classNamePrefix}
          />
        )}
      </div>
    </OutsideClickWrapper>
  );
}

export default Dropdown;
