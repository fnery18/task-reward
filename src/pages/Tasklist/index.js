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
                corBorda: 'green',
                icone: 'Done'
            },
            {
                valor: 3,
                titulo: 'Andamento',
                corBorda: 'red',
                icone: 'Warning'
            },
            {
                valor: 5,
                titulo: 'Pontos',
                corBorda: 'yellow',
                icone: 'EmojiEvents'
            }
        ]
    };

    const [state, setState] = React.useState(initialState);

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

                <TaskListCalendar></TaskListCalendar>
            </Header>
        </>
    );
}