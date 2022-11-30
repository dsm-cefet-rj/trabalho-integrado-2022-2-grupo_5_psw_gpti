import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MemberForm from "./../MemberForm"
// import TextField from '@mui/material/TextField';
// import DialogContentText from '@mui/material/DialogContentText';

export default function Modal({membros, setMembros}) {
	const [open, setOpen] = useState(false);
	const [formMember, setFormMember] = useState({
		name: '',
		sal: 0
	});

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSave = () => {
		console.log([...membros, formMember]);
		setMembros([...membros, formMember]);
		setOpen(false);
	};

	

	return (
		<div>
			<Button variant="outlined" onClick={handleClickOpen}>Adicionar Membros</Button>

			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Adicionar Novo Integrante</DialogTitle>
				<DialogContent>
					<MemberForm formMember={formMember} setFormMember={setFormMember} />
				</DialogContent>

				<DialogActions>
					<Button onClick={handleSave}>Adicionar</Button>
					<Button onClick={handleClose}>Cancelar</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}