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
        setIsOpen(true);
    };

    const handleModalClose = () => {
        setIsOpen(false);
    };

    const [isOpen, setIsOpen] = useState(false);
    const [tiposCardPontuacao, setTiposCardPontuacao] = useState([]);
    const [tasks, setTasks] = useState([]);

    function retornarNovoId() {
        if (tasks.length > 0) {
            let id = Math.max.apply(Math, tasks.map(function (c) {
                return c.id
            }));
            return ++id;
        }
        else {
            return 1;
        }
    }

    function handleTaskAdd(descricao) {
        let novaTask = { descricao, finalizada: false, id: retornarNovoId() };
        let tasksAux = tasks;
        tasksAux.push(novaTask);

        setTasks(tasksAux);
        handleModalClose();
    }

    function handleTaskChange(checked, idTask) {
        if (idTask > 0) {
            let tarefas = tasks;

            console.log('achei essa: ', tarefas.filter(c => c.id === idTask)[0]);
            console.log('valor do checked:', checked);
            (tarefas.filter(c => c.id === idTask)[0]).finalizada = checked;

            setTasks(tarefas);
        }
    }

    function handleTaskDelete(idTask) {
        let tarefasAtualizadas = tasks.filter(c => c.id !== idTask);

        setTasks(tarefasAtualizadas)
    }

    useEffect(() => {
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
            ]
        );


    }, []);

    useEffect(() => {

    });

    return (
        <>
            <Header tituloHeader="Minha Tasklist">
                <Box className={classes.containerPontos}>
                    {tiposCardPontuacao.map((objeto, index) => (
                        <div key={index} className={classes.divCards}>
                            <CardPontuacao tipo={objeto.tipo} tasks={tasks}></CardPontuacao>
                        </div>
                    ))}
                </Box>

                <br />

                <TaskListCalendar
                    tasks={tasks}
                    handleTaskChange={(checked, idTask) => handleTaskChange(checked, idTask)}
                    handleTaskDelete={(idTask) => handleTaskDelete(idTask)}>
                </TaskListCalendar>

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
                <ModalAddTask isOpen={isOpen} handleModalClose={() => handleModalClose()} handleTaskAdd={(descricao) => handleTaskAdd(descricao)} />
            </Header>
        </>
    );
}