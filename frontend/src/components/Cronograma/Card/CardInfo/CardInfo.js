import React, { useEffect, useState } from "react";
import {
  Calendar,
  CheckSquare,
  List,
  Users,
  Trash,
  Type,
  X,
} from "react-feather";

import Modal from "../../Modal/Modal";
import Editable from "../../Editabled/Editable";

import "./CardInfo.css";

function CardInfo(props) {
  const colors = [
    "#a8193d",
    "#4fcc25",
    "#1ebffa",
    "#8da377",
    "#9975bd",
    "#cf61a1",
    "#240959",
    "#ffa500",
    "#A62A2A"
  ];

  const [selectedColor, setSelectedColor] = useState();
  const [values, setValues] = useState({
    ...props.card,
  });

  const atualizarTitulo = (value) => {
    setValues({ ...values, title: value });
  };

  const atualizarDescricao = (value) => {
    setValues({ ...values, desc: value });
  };

  const adicionarMembros = (label) => {
    const index = values.labels.findIndex((item) => item.text === label.text);
    if (index > -1) return;

    setSelectedColor("");
    setValues({
      ...values,
      labels: [...values.labels, label],
    });
  };

  const removerMembros = (label) => {
    const tempLabels = values.labels.filter((item) => item.text !== label.text);

    setValues({
      ...values,
      labels: tempLabels,
    });
  };

  const adicionarMetas = (value) => {
    const task = {
      id: Date.now() + Math.random() * 2,
      completed: false,
      text: value,
    };
    setValues({
      ...values,
      tasks: [...values.tasks, task],
    });
  };

  const removerMetas = (id) => {
    const tasks = [...values.tasks];

    const tempTasks = tasks.filter((item) => item.id !== id);
    setValues({
      ...values,
      tasks: tempTasks,
    });
  };

  const atualizarMetas = (id, value) => {
    const tasks = [...values.tasks];

    const index = tasks.findIndex((item) => item.id === id);
    if (index < 0) return;

    tasks[index].completed = value;

    setValues({
      ...values,
      tasks,
    });
  };

  const porcentagemConcluida = () => {
    if (!values.tasks?.length) return 0;
    const completed = values.tasks?.filter((item) => item.completed)?.length;
    return (completed / values.tasks?.length) * 100;
  };

  const atualizarData = (date) => {
    if (!date) return;

    setValues({
      ...values,
      date,
    });
  };

  useEffect(() => {
    if (props.updateCard) props.updateCard(props.boardId, values.id, values);
    // eslint-disable-next-line
  }, [values]);

  return (
    <Modal onClose={props.onClose}>
      <div className="cardinfo">
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Type />
            <p>Titulo</p>
          </div>
          <Editable
            defaultValue={values.title}
            text={values.title}
            placeholder="Insira o titulo..."
            onSubmit={atualizarTitulo}
          />
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <List />
            <p>Descrição</p>
          </div>
          <Editable
            defaultValue={values.desc}
            text={values.desc || "Adicione uma descrição"}
            placeholder="Insira uma descrição..."
            onSubmit={atualizarDescricao}
          />
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Calendar />
            <p>Data</p>
          </div>
          <input
            type="date"
            defaultValue={values.date}
            min={new Date().toISOString().substr(0, 10)}
            onChange={(event) => atualizarData(event.target.value)}
          />
        </div>
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Users />
            <p>Membros</p>
          </div>
          <div className="cardinfo_box_labels">
            {values.labels?.map((item, index) => (
              <label
                key={index}
                style={{ backgroundColor: item.color, color: "#fff" }}
              >
                {item.text}
                <X onClick={() => removerMembros(item)} />
              </label>
            ))}
          </div>
          <ul>
            {colors.map((item, index) => (
              <li
                key={index + item}
                style={{ backgroundColor: item }}
                className={selectedColor === item ? "li_active" : ""}
                onClick={() => setSelectedColor(item)}
              />
            ))}
          </ul>
          <Editable
            text="Adicione um membro"
            placeholder="Insira um membro"
            onSubmit={(value) =>
              adicionarMembros({ color: selectedColor, text: value })
            }
          />
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <CheckSquare />
            <p>Metas</p>
          </div>
          <div className="cardinfo_box_progress-bar">
            <div
              className="cardinfo_box_progress"
              style={{
                width: `${porcentagemConcluida()}%`,
                backgroundColor:
                  porcentagemConcluida() === 100 ? "limegreen" : "",
              }}
            />
          </div>
          <div className="cardinfo_box_task_list">
            {values.tasks?.map((item) => (
              <div key={item.id} className="cardinfo_box_task_checkbox">
                <input
                  type="checkbox"
                  defaultChecked={item.completed}
                  onChange={(event) =>
                    atualizarMetas(item.id, event.target.checked)
                  }
                />
                <p className={item.completed ? "concluída" : ""}>{item.text}</p>
                <Trash onClick={() => removerMetas(item.id)} />
              </div>
            ))}
          </div>
          <Editable
            text={"Adicione uma meta"}
            placeholder="Insira uma meta..."
            onSubmit={adicionarMetas}
          />
        </div>
      </div>
    </Modal>
  );
}

export default CardInfo;
