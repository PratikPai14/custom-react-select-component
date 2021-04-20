import React from "react";
import arrowDown from "./arrow-down.svg";
import className from "./className";
function Header({
  toggle,
  showSelected,
  setShowSelected,
  query,
  handleSearchChange,
  placeholder,
  open,
  setOpen,
  selection,
  search,
  alwaysOpen,
  styles,
  classNamePrefix,
}) {
  function headerOnClick() {
    !alwaysOpen && toggle(!open);

    setShowSelected(false);
    !open
      ? document.getElementById("header__search")?.focus()
      : document.getElementById("header__search")?.blur();
  }

  return (
    <div
      tabIndex={0}
      className={className(classNamePrefix, "header")}
      role="button"
      onClick={headerOnClick}
      style={{ width: styles.width }}
    >
      <Placeholder
        showSelected={showSelected}
        query={query}
        handleSearchChange={handleSearchChange}
        placeholder={placeholder}
        setOpen={setOpen}
        selection={selection}
        search={search}
        classNamePrefix={classNamePrefix}
      />

      <ActionButton open={open} classNamePrefix={classNamePrefix} />
    </div>
  );
}

function Placeholder({
  showSelected,
  query,
  handleSearchChange,
  placeholder,
  setOpen,
  selection,
  search,
  classNamePrefix,
}) {
  return (
    <div className={className(classNamePrefix, "header__placeholder")}>
      {!showSelected ? (
        search ? (
          <input
            className={className(classNamePrefix, "header__search")}
            type="text"
            id="header__search"
            value={query}
            onChange={handleSearchChange}
            placeholder={placeholder}
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
          />
        ) : (
          <p
            className={className(classNamePrefix, "header__placeholder--bold")}
          >
            {selection
              .reduce((total, curr) => {
                return total + ", " + curr.name;
              }, "")
              .substring(1)}
          </p>
        )
      ) : selection.length === 0 ? (
        <p className={className(classNamePrefix, "header__placeholder--bold")}>
          {placeholder}
        </p>
      ) : (
        <p className={className(classNamePrefix, "header__placeholder--bold")}>
          {selection
            .reduce((total, curr) => {
              return total + ", " + curr.name;
            }, "")
            .substring(1)}
        </p>
      )}
    </div>
  );
}

function ActionButton({ open, classNamePrefix }) {
  return (
    <div className={className(classNamePrefix, "header__action")}>
      {open ? (
        <p className={className(classNamePrefix, "header__arrow-rotate")}>
          <img src={arrowDown} alt="" width="20px" />
        </p>
      ) : (
        <p>
          <img src={arrowDown} alt="" width="20px" />
        </p>
      )}
    </div>
  );
}

export default Header;
