import React, { useState } from "react";
// import "./styles/form.css"
export default function MemberForm() {


	const [nome, setNome] = useState("");
	const [salario, setSalario] = useState(0);
	
	const [newMember, UpdateMember] = useState({
		nome: nome,
		salario: salario
	});


	function handleUpdtName(props) {

		// setNome();
		// UpdateMember();
	}
	function handleUpdtSalario(props) {

		// setSalario();
		// UpdateMember();
	}
	function handleSubmitMember() {
		// Enviar objeto newMember para adição no componente ListMembers
	}

	return (
		<>
			<form action="">
				<label htmlFor="nick">Nome do Integrante: </label>
				<input onChange={() => handleUpdtName()} name="nick" className="nickname-input" type="text" required></input><br />
				<label htmlFor="salario">Salario Inicial: </label>
				<input onChange={() => handleUpdtSalario()} name="salario" className="salario-input" type="number" placeholder="R$" required></input><br />

				<button type="submit" onClick={() => handleSubmitMember()}>Cadastrar Membro</button> 
				<button type="reset">Limpar</button>
			</form>
		</>
	);
}

