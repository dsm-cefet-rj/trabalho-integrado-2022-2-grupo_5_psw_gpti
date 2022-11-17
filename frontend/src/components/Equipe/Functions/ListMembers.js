import React, {useState} from "react";


export default function ListMembers(props) {

	const [membros, setMembros] = useState([]);

	function handleOnClickRemoveMember(param) {
		setMembros(membros.filter((member) => member.id !== param))
	}

	function handleOnClickAddMember() {
		setMembros(membros.concat({ name: "Diogo", Salario: 27000, status: "Indisponível", id: 4 }));
	}

	return (
		<>
			<h3>Lista de Membros</h3>
			<div className="MembersList">
				<Members membros={membros} onClickRemoveMember={handleOnClickRemoveMember} />
			</div>
			<AddMember onClickAddMember={handleOnClickAddMember} />
		</>
	);
}


function Player(props) {
	return (
		<>
			<div className="PlayerDiv">
				<div className="Cabecalho">
					<img src="../../../../public/defaultPlayer.png" alt="img" width="125px" height="125px" /> <b><u>{props.player.name}</u></b>
					<button className="editPlayer" onClick={()=>{}}>Editar Dados</button>
					<button className="removePlayer" onClick={() => props.onClickRemoveMember(props.key)}>Remover da Equipe</button>
				</div>
				<label>Nome:</label>{props.player.sal}<br />
				<label>Status:</label>{props.player.status}<br />
				<button className="AddTask" onClick={()=>{}}>Adicionar Meta</button>
			</div>
			<br />
		</>
	);
}

function Members(props) {
	return (
		<div className="ListMembers">
			{props.membros.map((player) => (<Player player={player} key={player.id} onClickRemoveMember={props.onClickRemoveMember} />))}
			{/* <AddMember/> */}
		</div>
	);
}

function createModal(props) {
	
}

function AddMember(props) {
	return (
		<div className="AddPlayerDiv">
			<label>Novo Membro</label><br />
			{/* Create modal */}
			<button>Adiconar Membro</button>
		</div>
	);
}


