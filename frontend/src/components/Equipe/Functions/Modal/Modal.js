import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function Modal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
	setOpen(true);
  };

  const handleClose = () => {
	setOpen(false);
  };

  return (
	<div>
	  <Button variant="outlined" onClick={handleClickOpen}>
		Adicionar Membros
	  </Button>
	  <Dialog open={open} onClose={handleClose}>
		<DialogTitle>Adicionar Novo Integrante
		  <Button onClick={handleClose}>X</Button></DialogTitle>
		<DialogContent>
		  <DialogContentText>
			To subscribe to this website, please enter your email address here. We
			will send updates occasionally.
		  </DialogContentText>
		  <TextField
			autoFocus
			margin="dense"
			label="Email Address"
			type="email"
			fullWidth
			variant="standard"
		  />
		</DialogContent>
		<DialogActions>
		  <Button onClick={handleClose}>Cancel</Button>
		  <Button onClick={handleClose}>Subscribe</Button>
		</DialogActions>
	  </Dialog>
	</div>
  );
}