
function Player(props) {
	return (
		<div className="PlayerDiv">
			<div className="Cabecalho">
				<img src="../../public/defaultPlaye.png" alt="img" /> <u>{props.player.name} </u>
				<button className="editPlayer" type="" action="">Editar Dados</button>
				<button className="removePlayer" type="" action="">Remover da Equipe</button>
			</div>
			<label>Nome:</label>{props.player.sal}<br />
			<label>Status:</label>{props.player.status}<br />
			<button className="AddTask" type="" action="">Adicionar Meta</button>
		</div>
	);
}


// function AddMember() {
// 	return (

// 	);
// }

export default function ListMembers(props) {
	return (
		<>
			<div className="ListMembers">
				{props.membros.map((player) => (<Player player={player} />))}

			</div>
		</>
	);
}
