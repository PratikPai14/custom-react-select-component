import React from "react";
import isOptionInSelection from "./isOptionInSelection";
import tick from "./tick.svg";
import className from "./className";
const OptionList = ({
  selection,
  handleOnClick,
  optionsResults,
  emptyMessage,
  grouped,
  styles,
  classNamePrefix,
}) => {
  return grouped ? (
    <GroupedOptions
      selection={selection}
      handleOnClick={handleOnClick}
      optionsResults={optionsResults}
      emptyMessage={emptyMessage}
      styles={styles}
      classNamePrefix={classNamePrefix}
    />
  ) : (
    <UngroupedOptions
      selection={selection}
      handleOnClick={handleOnClick}
      optionsResults={optionsResults}
      emptyMessage={emptyMessage}
      styles={styles}
      classNamePrefix={classNamePrefix}
    />
  );
};

const UngroupedOptions = ({
  selection,
  handleOnClick,
  optionsResults,
  emptyMessage,
  styles,
  classNamePrefix,
}) => {
  return (
    <ul
      className={className(classNamePrefix, "list")}
      style={{
        width: styles.width,
        height: styles.height,
        maxHeight: styles.maxHeight,
      }}
    >
      {optionsResults.map((option) => (
        <li
          className={className(classNamePrefix, "list-option")}
          key={option.value}
        >
          <button
            disabled={option.disabled}
            type="button"
            onClick={() => handleOnClick(option)}
            style={{
              backgroundColor: isOptionInSelection(option, selection)
                ? styles.backgroundColorOnSelect
                : styles.backgroundColor,
            }}
            onMouseOver={(e) =>
              !isOptionInSelection(option, selection)
                ? (e.target.style.backgroundColor =
                    styles.backgroundColorOnHover)
                : ""
            }
            onMouseOut={(e) =>
              !isOptionInSelection(option, selection)
                ? (e.target.style.backgroundColor = styles.backgroundColor)
                : ""
            }
          >
            <span
              style={{
                color: isOptionInSelection(option, selection)
                  ? styles.fontColorOnSelect
                  : styles.fontColor,
              }}
            >
              {option.name}
            </span>
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
        <li className={className(classNamePrefix, "list-option")}>
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
  styles,
  classNamePrefix,
}) => {
  return (
    <ul
      className={className(classNamePrefix, "list")}
      style={{
        width: styles.width,
        height: styles.height,
        maxHeight: styles.maxHeight,
      }}
    >
      {optionsResults.map(({ label, options }) => (
        <>
          <li key={label}>
            <strong
              style={{
                color: styles.labelColor,
                backgroundColor: styles.labelBackgroundColor,
              }}
            >
              {label}
            </strong>
          </li>
          {options?.map((option) => (
            <li
              className={className(classNamePrefix, "list-option")}
              key={option.value}
            >
              <button
                disabled={option.disabled}
                type="button"
                onClick={() => handleOnClick(option)}
                style={{
                  backgroundColor: isOptionInSelection(option, selection)
                    ? styles.backgroundColorOnSelect
                    : styles.backgroundColor,
                }}
                onMouseOver={(e) =>
                  !isOptionInSelection(option, selection)
                    ? (e.target.style.backgroundColor =
                        styles.backgroundColorOnHover)
                    : ""
                }
                onMouseOut={(e) =>
                  !isOptionInSelection(option, selection)
                    ? (e.target.style.backgroundColor = styles.backgroundColor)
                    : ""
                }
              >
                <span
                  style={{
                    color: isOptionInSelection(option, selection)
                      ? styles.fontColorOnSelect
                      : styles.fontColor,
                  }}
                >
                  {option.name}
                </span>
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
        <li className={className(classNamePrefix, "list-option")}>
          <button disabled>
            <span> {emptyMessage}</span>
          </button>
        </li>
      )}
    </ul>
  );
};

export default OptionList;
