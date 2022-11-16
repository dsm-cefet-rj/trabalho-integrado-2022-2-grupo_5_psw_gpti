import React, { useEffect, useRef } from "react";

import "./Dropdown.css";

function Dropdown(props) {
  const dropdownRef = useRef();

  const manipularClique = (event) => {
    if (
      dropdownRef &&
      !dropdownRef.current?.contains(event.target) &&
      props.onClose
    )
      props.onClose();
  };

  useEffect(() => {
    document.addEventListener("click", manipularClique);

    return () => {
      document.removeEventListener("click", manipularClique);
    };
  });

  return (
    <div
      ref={dropdownRef}
      className={`dropdown custom-scroll ${props.class ? props.class : ""}`}
    >
      {props.children}
    </div>
  );
}

export default Dropdown;
