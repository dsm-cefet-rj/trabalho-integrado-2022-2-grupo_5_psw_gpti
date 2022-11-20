import React, {useState} from "react";

export default function ListMembers(props) {

	const [membros, setMembros] = useState([]);

	function handleOnClickRemoveMember(param) {
		setMembros(membros.filter((member) => member.id !== param))
	}

	return (
		<>
			<div className="MembersList">
				<Members membros={membros} onClickRemoveMember={handleOnClickRemoveMember} />
			</div>
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
		</div>
	);
}
