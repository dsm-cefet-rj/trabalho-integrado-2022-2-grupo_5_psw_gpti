import React, { Component } from "react";

export default class ListMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      membros: [
        { name: "Rodrigo", sal: 7000, status: "Disponivel" },
        { name: "Bernardo", sal: 7000, status: "Indisponivel" },
        { name: "Vinicius", sal: 7000, status: "Indisponivel" },
      ],
    };
  }
  render() {
    return (
      <>
        <h3>Lista de Membros</h3>
        <Members membros={this.state.membros} />
      </>
    );
  }
}

function Player(props) {
  return (
    <>
      <div className="PlayerDiv">
        <div className="Cabecalho">
          <img
            src="public/defaultPlayer.png"
            alt="img"
            width="125px"
            height="125px"
          />{" "}
          <u>{props.player.name}</u>
          <button className="editPlayer" type="" action="">
            Editar Dados
          </button>
          <button className="removePlayer" type="" action="">
            Remover da Equipe
          </button>
        </div>
        <label>Nome:</label>
        {props.player.name}
        <br />
        <label>Status:</label>
        {props.player.status}
        <br />
        <button className="AddTask" type="" action="">
          Adicionar Meta
        </button>
      </div>
      <br />
    </>
  );
}

function AddMember() {
  return (
    <div className="AddPlayerDiv">
      <label>Novo Membro</label>
      <br />
      <button>Adicionar Membro</button>
    </div>
  );
}

function Members(props) {
  return (
    <>
      <div className="ListMembers">
        {props.membros.map((player) => (
          <Player player={player} />
        ))}
        <AddMember />
      </div>
    </>
  );
}
