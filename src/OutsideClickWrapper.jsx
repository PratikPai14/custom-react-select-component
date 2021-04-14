import React, { useRef } from "react";
import useOutsideClick from "./useOutsideClick";
import PropTypes from "prop-types";

const OutsideClickWrapper = (props) => {
  const { setOpen, setShowSelected, alwaysOpen } = props;
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, setOpen, setShowSelected, alwaysOpen);

  return <div ref={wrapperRef}>{props.children}</div>;
};

OutsideClickWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OutsideClickWrapper;
