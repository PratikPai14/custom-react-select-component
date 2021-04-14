import { useEffect } from "react";

function useOutsideClick(ref, setOpen, setShowSelected, alwaysOpen) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        !alwaysOpen && setOpen(false);
        setShowSelected(true);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setOpen, setShowSelected, alwaysOpen]);
}

export default useOutsideClick;
