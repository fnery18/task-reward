import React, { useState, useEffect } from 'react';
import makeStyles from './styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function TaskListCalendar(props) {
    const classes = makeStyles();
    
    const { props: { open } } = props;
    const { props: { handleClose } } = props;
    const { props: { handleTaskAdd } } = props;
    const [descricao, setDescricao] = useState('');

    const handleNewTask = (e) => {
        setDescricao(e.target.value);
    }

    const handleAdd = () => {
        handleTaskAdd(descricao);
        setDescricao('');
    }

    return (
        <>
            <Dialog open={open ?? false} onClose={handleClose}>
                <DialogTitle>Nova Task</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Digite o nome da sua nova tarefa de hoje.
                    </DialogContentText>
                    <TextField
                        value={descricao}
                        onChange={handleNewTask}
                        autoFocus
                        margin="dense"
                        label="Task"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleAdd} color="primary">
                        Salvar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};