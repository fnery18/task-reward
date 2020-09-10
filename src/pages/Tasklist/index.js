import React, { useEffect, useState } from 'react';
import makeStyles from './styles.js';

import Header from '../../components/Header';
import CardPontuacao from '../../components/CardPontuacao';
import Box from '@material-ui/core/Box';
import TaskListCalendar from '../../components/TaskListCalendar';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import ModalAddTask from '../../components/ModalAddTask'

export default function Tasklist(props) {
    const classes = makeStyles();

    const handleModalOpen = () => {
        setOpen(true);
    };

    const handleModalClose = () => {
        setOpen(false);
    };

    const [open, setOpen] = useState(false);
    const [tiposCardPontuacao, setTiposCardPontuacao] = useState([]);

    const initialState = {
        tasks: [
            {
                id: 1,
                descricao: 'Tarefax 1',
                finalizada: false
            },
            {
                id: 2,
                descricao: 'Tarefa 2',
                finalizada: false
            },
            {
                id: 3,
                descricao: 'Tarefa 3',
                finalizada: false
            },
            {
                id: 4,
                descricao: 'Tarefa 4',
                finalizada: false
            },
            {
                id: 5,
                descricao: 'Tarefa 5',
                finalizada: false
            }
        ],
        handleTaskChange: null,
        handleTaskAdd: null
    };

    const [state, setState] = useState(initialState);

    const retornarId = () => {
        let id = Math.max.apply(Math, state.tasks.filter(c => c.id));
        return id++;
    }

    useEffect(() => {
        let teste = state;

        setTiposCardPontuacao(
            [
                {
                    tipo: 'completo'
                },
                {
                    tipo: 'andamento'
                },
                {
                    tipo: 'pontos'
                }
            ]);

        teste.handleTaskChange =
            function (checked, taskId) {
                let tasksRefresh = state.tasks;

                tasksRefresh.filter(c => c.id === taskId)[0].finalizada = checked;

                setState({ ...state, tasks: tasksRefresh })
            }

        teste.handleTaskAdd =
            function (descricao) {
                let tarefa = state.tasks;
                tarefa.push({ descricao, finalizada: false, id: retornarId() })
                setState({ ...state, tasks: tarefa })
                handleModalClose();
            }

        setState({
            ...state, handleTaskAdd: teste.handleTaskAdd, handleTaskChange: teste.handleTaskChange, handleTaskDelete: teste.handleTaskDelete
        });

    }, []);

    useEffect(() => {

    });

    return (
        <>
            <Header tituloHeader="Minha Tasklist">
                <Box className={classes.containerPontos}>
                    {tiposCardPontuacao?.map((objeto, index) => (
                        <div key={index} className={classes.divCards}>
                            <CardPontuacao tipo={objeto.tipo} tasks={state.tasks}></CardPontuacao>
                        </div>
                    ))}
                </Box>

                <br />

                <TaskListCalendar props={{ state: state, setState: setState }}></TaskListCalendar>

                <div className={classes.divAcoes}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<AddIcon />}
                        onClick={handleModalOpen}
                    >
                        Adicionar
                    </Button>
                </div>
                <ModalAddTask props={{ open: open, handleClose: handleModalClose, handleTaskAdd: state.handleTaskAdd }} />
            </Header>
        </>
    );
}