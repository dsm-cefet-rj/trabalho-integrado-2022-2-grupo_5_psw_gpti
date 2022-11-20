import React, {useState} from "react";
import "./Modal.css"
import AddMemberForm from "./../AddMemberForm"


export default function Modal(props) {
	
	
	if (!props.show) {
		return null;
	}

	return (
		<>
			<div className="modal">
				<div className="modal-content">

					<div className="modal-header">
						<h4 className="modal-title">Adicionar Novo Integrante</h4>
					</div>

					<div className="modal-body">
						<AddMemberForm />
					</div>

					<div className="modal-footer">
						<button>Cadastrar Membro</button><button>Cancelar</button>
					</div>
				</div>
			</div>
		</>
	);
}

export function AddMember(props) {

	return (
		<div className="AddPlayerDiv">
			<Modal show={true} />
			<label>Novo Membro</label> <button>Adicionar Membro</button>
		</div>
	);
}
