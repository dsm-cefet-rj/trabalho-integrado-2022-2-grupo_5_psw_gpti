import React, {useState} from "react";
import Modal from "./Modal/Modal"

export default function ListMembers(props) {

	const [membros, setMembros] = useState([
		{key: 1,name: "osvaldo",sal: 1250, status: "Disponível"},
		{key: 2, name: "osvaldin",sal: 1250, status: "Disponível"},
		{key: 3,name: "osvaldaço",sal: 1250, status: "Disponível"},
		{key: 4,name: "osvaldao",sal: 1250, status: "Disponível"},
	]);

	function handleOnClickRemoveMember(param) {
		setMembros(membros.filter((member) => member.key !== param))
	}

	return (
		<>
			<div className="MembersList">
				<Members membros={membros} onClickRemoveMember={handleOnClickRemoveMember} />
			</div>
			<Modal membros={membros} setMembros={setMembros}/>
		</>
	);
}

function Player(props) {
	return (
		<>
			<div className="PlayerDiv">
				<div className="Cabecalho">
					<img src="../../../../public/defaultPlayer.png" alt="img" wkeyth="225px" height="225px" /> <b><u>{props.player.name}</u></b>
					<button className="editPlayer" onClick={() => {}}>Editar</button>
					<button className="removePlayer" onClick={() => props.onClickRemoveMember(props.player.key)}>Remover</button>
				</div>
				<label>Nome:</label>{props.player.sal}<br />
				<label>Status:</label>{props.player.status}<br />
				<button className="AddTask" onClick={() => {}}>Adicionar Meta</button>
			</div>
			<br />
		</>
	);
}

function Members(props) {
	return (
		<div className="ListMembers">
			{props.membros.map((player) => (<Player player={player} key={player.key} onClickRemoveMember={props.onClickRemoveMember} />))}
		</div>
	);
}
