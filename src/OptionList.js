import React from "react";
import isOptionInSelection from "./isOptionInSelection";
import tick from "./tick.svg";

const OptionList = ({
  selection,
  handleOnClick,
  optionsResults,
  emptyMessage,
  grouped,
}) => {
  return grouped ? (
    <GroupedOptions
      selection={selection}
      handleOnClick={handleOnClick}
      optionsResults={optionsResults}
      emptyMessage={emptyMessage}
    />
  ) : (
    <UngroupedOptions
      selection={selection}
      handleOnClick={handleOnClick}
      optionsResults={optionsResults}
      emptyMessage={emptyMessage}
    />
  );
};

const UngroupedOptions = ({
  selection,
  handleOnClick,
  optionsResults,
  emptyMessage,
}) => {
  return (
    <ul className="dd-list">
      {optionsResults.map((option) => (
        <li className="dd-list-option" key={option.value}>
          <button
            disabled={option.disabled}
            type="button"
            onClick={() => handleOnClick(option)}
          >
            <span>{option.name}</span>
            {isOptionInSelection(option, selection) ? (
              <>
                <img src={tick} alt="" width="20px" />
              </>
            ) : (
              ""
            )}
          </button>
        </li>
      ))}
      {emptyMessage && !optionsResults.length && (
        <li className="dd-list-option">
          <button disabled>
            <span> {emptyMessage}</span>
          </button>
        </li>
      )}
    </ul>
  );
};

const GroupedOptions = ({
  selection,
  handleOnClick,
  optionsResults,
  emptyMessage,
}) => {
  return (
    <ul className="dd-list">
      {optionsResults.map(({ label, options }) => (
        <>
          <li className="dd-list-option">
            <h4>{label}</h4>
          </li>

          {options.map((option) => (
            <li className="dd-list-option" key={option.value}>
              <button
                disabled={option.disabled}
                type="button"
                onClick={() => handleOnClick(option)}
              >
                <span>{option.name}</span>
                {isOptionInSelection(option, selection) ? (
                  <>
                    <img src={tick} alt="" width="20px" />
                  </>
                ) : (
                  ""
                )}
              </button>
            </li>
          ))}
        </>
      ))}
      {emptyMessage && !optionsResults.length && (
        <li className="dd-list-option">
          <button disabled>
            <span> {emptyMessage}</span>
          </button>
        </li>
      )}
    </ul>
  );
};

export default OptionList;
