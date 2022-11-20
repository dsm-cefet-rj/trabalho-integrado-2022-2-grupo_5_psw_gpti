import React from "react";
// import "./styles/form.css"
export default function AddMemberForm() {
    return (
        <>
            <form action="">
                <label>Nome do Integrante:</label> <input className="nickname-input" type="text" required></input><br />
                <label>Salario Inicial:</label> R$<input style={{width: "100px"}} className="salario-input" type="number" required></input>
            </form>
        </>
    );
}

