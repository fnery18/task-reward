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

    const initialState = {
        tasks: [
            {
                id: 1,
                descricao: 'Tarefax 1',
                finalizada: true
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
        valorCardPontuacao: [
            {
                valor: 1,
                titulo: 'Completas',
                corBorda: 'green',
                icone: 'Done'
            },
            {
                valor: 4,
                titulo: 'Andamento',
                corBorda: 'red',
                icone: 'Warning'
            },
            {
                valor: 3,
                titulo: 'Pontos',
                corBorda: 'yellow',
                icone: 'EmojiEvents'
            }
        ],
        handleTaskChange: null
    };

    const [state, setState] = useState(initialState);

    useEffect(() => {
        let teste = state;
        teste.handleTaskChange =
            function (checked) {
                let valordCard = state.valorCardPontuacao;

                if (checked) {
                    valordCard[0].valor++;
                    valordCard[1].valor--;
                }
                else {
                    valordCard[0].valor--;
                    valordCard[1].valor++;
                }

                setState({ ...state, valorCardPontuacao: valordCard })
            }

        setState(teste);
    }, []);

    return (
        <>
            <Header tituloHeader="Minha Tasklist">
                <Box className={classes.containerPontos}>
                    {state.valorCardPontuacao.map((objeto, index) => (
                        <div key={index} className={classes.divCards}>
                            <CardPontuacao valorCardPontuacao={objeto}></CardPontuacao>
                        </div>
                    ))}
                </Box>

                <br />

                <TaskListCalendar componentPai={state}></TaskListCalendar>
                
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
                <ModalAddTask props={{ open: open, handleClose: handleModalClose }} />
            </Header>
        </>
    );
}