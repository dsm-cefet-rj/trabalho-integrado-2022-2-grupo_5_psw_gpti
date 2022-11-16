import React, {Component} from "react";


export default class ListMembers extends Component {

	constructor(props){
		super(props);
		this.state = {
			membros: [
				{ name: "Rodrigo", sal: 7000, status: "Disponivel", num: 1 },
				{ name: "Bernado", sal: 7000, status: "Indisponivel", num: 2 },
				{ name: "Vinicius", sal: 7000, status: "Indisponivel", num: 3 }
			]
		};
	}
	
	render() {
		return (
			<>
				<h3>Lista de Membros</h3>
				<div className="MembersList">
					<Members membros={this.state.membros} />
					<AddMember />
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
					<img src="../../../../public/defaultPlayer.png" alt="img" width="125px" height="125px"/> <b><u>{props.player.name}</u></b>
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
}

function Members(props) {
	return (
			<div className="ListMembers">
			{props.membros.map((player) => (<Player player={player} key={player.num} />))}
				{/* <AddMember/> */}
			</div>
	);
}

function AddMember() {
	return (
		<div className="AddPlayerDiv">
			<label>Novo Membro</label><br/>
			<button onClick={()=>alert("Membro criado")}>Adiconar Membro</button>
		</div>
	);
}

