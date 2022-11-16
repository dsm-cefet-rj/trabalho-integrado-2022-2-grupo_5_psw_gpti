import React, { useState } from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";

import Dropdown from "../Dropdown/Dropdown";

import "./Card.css";
import CardInfo from "./CardInfo/CardInfo";

function Card(props) {
  const [mostrarSuspensao, trocarMostrarSuspensao] = useState(false);
  const [mostrarModal, trocarMostrarModal] = useState(false);

  const { id, title, date, tasks, labels } = props.card;

  const formatoData = (value) => {
    if (!value) return "";
    const date = new Date(value);
    if (!date) return "";

    const meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    const dia = date.getDate();
    const mes = meses[date.getMonth()];
    return dia + " " + mes;
  };

  return (
    <>
      {mostrarModal && (
        <CardInfo
          onClose={() => trocarMostrarModal(false)}
          card={props.card}
          boardId={props.boardId}
          updateCard={props.updateCard}
        />
      )}
      <div
        className="card"
        draggable
        onDragEnd={() => props.dragEnded(props.boardId, id)}
        onDragEnter={() => props.dragEntered(props.boardId, id)}
        onClick={() => trocarMostrarModal(true)}
      >
        <div className="card_top">
          <div className="card_top_labels">
            {labels?.map((item, index) => (
              <label key={index} style={{ backgroundColor: item.color }}>
                {item.text}
              </label>
            ))}
          </div>
          <div
            className="card_top_more"
            onClick={(event) => {
              event.stopPropagation();
              trocarMostrarSuspensao(true);
            }}
          >
            <MoreHorizontal />
            {mostrarSuspensao && (
              <Dropdown
                class="board_dropdown"
                onClose={() => trocarMostrarSuspensao(false)}
              >
                <p onClick={() => props.removeCard(props.boardId, id)}>
                  Deletar evento
                </p>
              </Dropdown>
            )}
          </div>
        </div>
        <div className="card_title">{title}</div>
        <div className="card_footer">
          {date && (
            <p className="card_footer_item">
              <Clock className="card_footer_icon" />
              {formatoData(date)}
            </p>
          )}
          {tasks && tasks?.length > 0 && (
            <p className="card_footer_item">
              <CheckSquare className="card_footer_icon" />
              {tasks?.filter((item) => item.completed)?.length}/{tasks?.length}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
