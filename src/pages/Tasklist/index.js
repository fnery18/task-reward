import React, { useState } from 'react';
import makeStyles from './styles.js';
import Header from '../../components/Header';
import CardPontuacao from '../../components/CardPontuacao';
import Box from '@material-ui/core/Box';
import TaskListCalendar from '../../components/TaskListCalendar';

export default function Tasklist(props) {
    const classes = makeStyles();

    const initialState = {
        valorCardPontuacao: [
            {
                valor: 1,
                titulo: 'Completas',
                corBorda: 'green'
            },
            {
                valor: 3,
                titulo: 'Andamento',
                corBorda: 'red'
            },
            {
                valor: 5,
                titulo: 'Pontos',
                corBorda: 'yellow'
            }
        ]
    };

    const [state, setState] = React.useState(initialState);

    return (
        <>
            <Header tituloHeader="Minha Tasklist">
                <Box className={classes.containerPontos}>
                    {state.valorCardPontuacao.map((objeto, index) => (
                        <div key={index}>
                            <CardPontuacao valorCardPontuacao={objeto}></CardPontuacao>
                        </div>
                    ))}
                </Box>

                <br />

                <TaskListCalendar></TaskListCalendar>
            </Header>
        </>
    );
}