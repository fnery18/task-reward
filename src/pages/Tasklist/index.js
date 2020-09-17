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

    const appCacheName = '@taskreward-app/';
    const [isOpen, setIsOpen] = useState(false);
    const [cardsPontuacao, setCardsPontuacao] = useState([]);
    const [tasks, setTasks] = useState([]);

    function handleModalOpen() {
        setIsOpen(true);
    };

    function handleModalClose() {
        setIsOpen(false);
    };

    function retornarNovoId() {
        return (tasks.map(({ id }) => id)).reduce(function (a, b) {
            return Math.max(a, b);
        }, 0) + 1;
    }

    function handleTaskAdd(descricao) {
        setTasks(
            [...tasks,
            { descricao, finalizada: false, id: retornarNovoId() }
            ]);
        handleModalClose();
    }

    function handleTaskChange(checked, idTask) {
        if (idTask > 0) {
            setTasks(tasks.map(element => element.id == idTask ? {...element, finalizada : checked} : element));
        }
    }

    function atualizarCardsPontuacao() {
        setCardsPontuacao(
            [
                {
                    corBorda: 'green',
                    titulo: 'Completas',
                    icone: 'done',
                    tipo: 'completo',
                    valor: tasks.filter(c => c.finalizada).length
                },
                {
                    corBorda: 'red',
                    titulo: 'Andamento',
                    icone: 'warning',
                    tipo: 'andamento',
                    valor: tasks.filter(c => !c.finalizada).length
                },
                {
                    titulo: 'Pontos',
                    corBorda: 'yellow',
                    icone: 'emoji_events',
                    tipo: 'pontos',
                    valor: 0
                }
            ]);
    }

    function handleTaskDelete(idTask) {
        let tarefasAtualizadas = tasks.filter(c => c.id !== idTask);

        setTasks(tarefasAtualizadas)
    }

    useEffect(() => {
        atualizarCardsPontuacao();

        if(tasks.length > 0)
            localStorage.setItem(appCacheName + 'tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        console.log('tasks:', tasks);
    });

    useEffect(() => {
        let tarefasCache = JSON.parse(localStorage.getItem(appCacheName + 'tasks'));

        if(tarefasCache){
            setTasks(tarefasCache)
        }
    }, [])

    return (
        <>
            <Header tituloHeader="Minha Tasklist">
                <Box className={classes.containerPontos}>
                    {cardsPontuacao.map((card, index) => (
                        <div key={index} className={classes.divCards}>
                            <CardPontuacao cardPontuacao={card}></CardPontuacao>
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