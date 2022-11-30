import React, { useState } from "react";


import TextField from '@mui/material/TextField';

// import "./styles/form.css"
export default function MemberForm() {


	const [nome, setNome] = useState("");
	const [salario, setSalario] = useState(0);

	const handleUpdtName = (props) => {

		setNome(props);
	}
	const handleUpdtSalario = (props) => {

		setSalario(props);
	}
	
	return (
		<>
			{/* <label htmlFor="nick">Integrante:</label> */}
			<TextField onChange={(newName) => handleUpdtName(newName.target.value)}
				label="Nome"
				name="nick"
				className="nickname-input"
				placeholder="Nickname - Ex: 'Xaolin Matador de Porco'"
				variant="standard"
			/>
			<br />

			{/* <label htmlFor="salario">Salario Inicial: </label> */}
			<TextField
				onChange={(newSal) => handleUpdtSalario(newSal.target.value)}
				inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 1200, increment: 0.1 }}
				type="number"
				placeholder="R$ XXXX.XX"
				variant="standard"
				name="salario"
				className="salario-input"
			/>
			<br />
		</>
	);
}

