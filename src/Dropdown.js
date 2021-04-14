import React, { useState, useEffect } from "react";

import OptionList from "./OptionList";
import Header from "./Header";
import fuzzySearch from "./fuzzySearch";
import OutsideClickWrapper from "./OutsideClickWrapper";

function Dropdown({
  classNamePrefix = "dd",
  placeholder,
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
}) {
  const [query, setQuery] = useState("");
  const [showSelected, setShowSelected] = useState(true);
  const [open, setOpen] = useState(alwaysOpen);
  const [selection, setSelection] = useState(
    value.length
      ? value
      : placeholder
      ? []
      : options
      ? [options.find((e) => e?.disabled !== true)]
      : []
  );
  const toggle = () => setOpen(!open);

  function handleOnClick(option) {
    if (!selection.some((current) => current.value === option.value)) {
      if (!multiSelect) {
        setSelection([option]);
      } else if (multiSelect) {
        setSelection([...selection, option]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.value !== option.value
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  const results = fuzzySearch(query, options);
  const optionsResults = query
    ? results?.slice(0, optionsLimit).map((result) => result.item)
    : options?.slice(0, optionsLimit);

  function handleSearchChange({ currentTarget = {} }) {
    const { value } = currentTarget;
    setQuery(value);
  }

  useEffect(() => {
    onChange(selection);
  }, [selection, onChange]);

  return (
    <OutsideClickWrapper
      setOpen={setOpen}
      setShowSelected={setShowSelected}
      alwaysOpen={alwaysOpen}
    >
      <div className="dd-wrapper">
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
        />

        {open && (
          <OptionList
            selection={selection}
            handleOnClick={handleOnClick}
            optionsResults={optionsResults}
            emptyMessage={emptyMessage}
          />
        )}
      </div>
    </OutsideClickWrapper>
  );
}

export default Dropdown;
