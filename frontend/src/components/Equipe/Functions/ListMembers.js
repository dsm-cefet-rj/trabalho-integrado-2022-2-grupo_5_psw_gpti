import React, { Component } from "react";

export default class ListMembers extends Component {
<<<<<<< HEAD
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
=======

	constructor(props){
		super(props);
		this.state = {
			membros:[
				{ name: "Rodrigo", sal: 7000, status: "Disponivel" },
				{ name: "Bernado", sal: 7000, status: "Indisponivel" },
				{ name: "Vinicius", sal: 7000, status: "Indisponivel" }
			]
		}
	}
	render() {
		return (
			<>
				<h3>Lista de Membros</h3>
				<div className="MembersList">
					<Members membros={this.state.membros} />
					<AddMember/>
				</div>
			</>
		);
	}
}

function Player(props) {
	return (
		<>
			<div className="PlayerDiv">
				<div className="Cabecalho">
					<img src="../../../../public/defaultPlayer.png" alt="img" width="125px" height="125px"/> <u>{props.player.name}</u>
					<button className="editPlayer" type="" action="">Editar Dados</button>
					<button className="removePlayer" type="" action="">Remover da Equipe</button>
				</div>
				<label>Nome:</label>{props.player.sal}<br />
				<label>Status:</label>{props.player.status}<br />
				<button className="AddTask" type="" action="">Adicionar Meta</button>
			</div>
			<br />
		</>
	);
>>>>>>> efc4a152780018aa0968d641e37be5cf8ff64f69
}

function Members(props) {
	return (
			<div className="ListMembers">
				{props.membros.map((player) => (<Player player={player} />))}
			</div>
	);
}

function AddMember() {
<<<<<<< HEAD
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
=======
	return (
		<div className="AddPlayerDiv">
			<label>Novo Membro</label><br/>
			<button onClick={()=>alert("Membro criado")}>Adiconar Membro</button>
		</div>
	);
}

>>>>>>> efc4a152780018aa0968d641e37be5cf8ff64f69
