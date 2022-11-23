import React, {useState} from "react";
import "./Modal.css"
import MemberForm from "./../MemberForm"


export default function Modal(props) {
	
	const [modalState, setIsOpen] = useState(false);

	// function openModal() {
	// 	setIsOpen(true);
	// }

	// function closeModal() {
	// 	setIsOpen(false);
	// }

	

	return (
		<>
			<div className="modal">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title">Adicionar Novo Integrante</h4><button >X</button>
					</div>
					<div className="modal-body">
						<MemberForm />
					</div>
					{/*div className="modal-footer">
					</div> */}
				</div>
			</div>
		</>
	);
}

export function AddMember(props) {

	return (
		<div className="AddPlayerDiv">
			<Modal show={true}/>
			<label>Novo Membro</label> <button onClick={() => alert("Usuario add")}>Adicionar Membro</button>
		</div>
	);
}
