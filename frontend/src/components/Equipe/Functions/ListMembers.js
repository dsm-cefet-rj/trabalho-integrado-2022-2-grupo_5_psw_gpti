
function Player(props) {
	return (
		<>
			<div className="PlayerDiv">
				<div className="Cabecalho">
					<img src="public/defaultPlayer.png" alt="img" width="125px" height="125px"/> <u>{props.player.name}</u>
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


function AddMember() {
	return (
		<div className="AddPlayerDiv">
			<label>Novo Membro</label><br/>
			<button>Adiconar Membro</button>
		</div>
	);
}

export default function ListMembers(props) {
	return (
		<>
			<div className="ListMembers">
				{props.membros.map((player) => (<Player player={player} key={player} />))}
				<AddMember/>
			</div>
		</>
	);
}
