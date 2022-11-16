import GlobalStyle from "../../../styles/global";


const Player = (propos) => {
	return (
		<div className="PlayerDiv">
			<div className="Cabecalho">
				<img src="../../public/defaultPlaye.png" /> <u>{propos.player.name}</u>
				<button className="editPlayer" type="" action="">Editar Dados</button>
				<button className="removePlayer" type="" action="">Remover da Equipe</button>
			</div>
			<br />
			<label>Nome:</label>{propos.player.sal}<br />
			<label>Status:</label>{propos.player.status}<br />
			<button className="AddTask" type="" action="">Adicionar Meta</button>
		</div>
	);
}


const users = { name: "Rodrigo", sal: 5000, status: "Disponivel" };



function Equipe() {
	return (
		<>
			<main>
				<section className="homeEquipe">
					<div className="home-text">
						<h4 className="text-h4">Gerencie sua Equipe</h4>
						<h1 className="text-h1">Equipe</h1>
						<p> Crie e adicione membros à sua equipe. Podendo promove-los a capitão ou removê-los. </p>
					</div>
				</section>
			</main>
			<Player player={users}/>
		</>
	);
}

export default Equipe;
