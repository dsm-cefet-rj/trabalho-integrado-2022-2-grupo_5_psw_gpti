import GlobalStyle from "../../styles/global";


const Player = (propos) => {
	return (
		<div nameClass="PlayerDiv">
			<div nameClass="Cabecalho">
				<img src="../../public/defaultPlaye.png" /> <u>{propos.player.name}</u>
				<button nameClass="editPlayer" type="" action="">Editar Dados</button>
				<button nameClass="removePlayer" type="" action="">Remover da Equipe</button>
				<br />
			</div>
			<label>Nome:</label>{propos.player.sal}<br />
			<label>Status:</label>{propos.player.status}<br />
			<button nameClass="AddTask" type="" action="">Adicionar Meta</button>
		</div>
	);
}


const users = {name: "Rodrigo", sal: 5000, status: "Disponivel"};



function Equipe() {
	return (
		<>
			<GlobalStyle />
			<main>
				<section className="homeEquipe">
					
					<Player player={users}/>

					
				</section>
			</main>
		</>
	);
}

export default Equipe;
