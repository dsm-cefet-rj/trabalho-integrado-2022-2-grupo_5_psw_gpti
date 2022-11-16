import React, { useState } from "react";

import { X } from "react-feather";

import "./Editable.css";

function Editable(props) {
  const [ehEditavel, trocarEditavel] = useState(false);
  const [inserirTexto, trocarInserirTexto] = useState(props.defaultValue || "");

  const submission = (e) => {
    e.preventDefault();
    if (inserirTexto && props.onSubmit) {
      trocarInserirTexto("");
      props.onSubmit(inserirTexto);
    }
    trocarEditavel(false);
  };

  return (
    <div className="editable">
      {ehEditavel ? (
        <form
          className={`editable_edit ${props.editClass ? props.editClass : ""}`}
          onSubmit={submission}
        >
          <input
            type="text"
            value={inserirTexto}
            placeholder={props.placeholder || props.text}
            onChange={(event) => trocarInserirTexto(event.target.value)}
            autoFocus
          />
          <div className="editable_edit_footer">
            <button type="submit">{props.buttonText || "Adicionar"}</button>
            <X onClick={() => trocarEditavel(false)} className="closeIcon" />
          </div>
        </form>
      ) : (
        <p
          className={`editable_display ${
            props.displayClass ? props.displayClass : ""
          }`}
          onClick={() => trocarEditavel(true)}
        >
          {props.text}
        </p>
      )}
    </div>
  );
}

export default Editable;
