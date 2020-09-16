import React, { useEffect, useState } from 'react';
import makeStyles from '../CardPontuacao/styles.js';
import { Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon'

export default function CardPontuacao(props) {
    const classes = makeStyles();
    const { tipo } = props;
    const { tasks } = props;
    const [cardPontuacao, setCardPontuacao] = useState({});

    const retornarValorCard = (tipo) => {
        if (tasks.length > 0) {
            if (tipo === 'completo') {
                return tasks?.filter(c => c.finalizada).length ?? 0;
            } else if (tipo === 'andamento') {
                return tasks?.filter(c => !c.finalizada).length ?? 0;
            }
            else {
                return 3;
            }
        }
    }

    const gerarDadosCard = (tipo) => {
        switch (tipo) {
            case 'completo':
                setCardPontuacao(
                    {
                        corBorda: 'green',
                        titulo: 'Completas',
                        icone: 'done'
                    })
                break;
            case 'andamento':
                setCardPontuacao(
                    {
                        corBorda: 'red',
                        titulo: 'Andamento',
                        icone: 'warning'
                    })
                break;
            case 'pontos':
                setCardPontuacao(
                    {
                        titulo: 'Pontos',
                        corBorda: 'yellow',
                        icone: 'emoji_events'
                    })
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        gerarDadosCard(tipo);
    }, [])

    useEffect(() => {
        console.log('tasks do card', tasks);
    })

    return (
        <div className={`${cardPontuacao.corBorda} ${classes.cardPontuacao}`}>
            <div className={classes.cardPontuacaoTitulo}>{cardPontuacao.titulo}</div>
            <div className={classes.cardPontuacaoValor}>
                <Typography>
                    {retornarValorCard(tipo)}
                </Typography>
                <span className={`${cardPontuacao.corBorda} ${classes.cardPontuacaoIcone}`}>
                    <Icon>{cardPontuacao?.icone?.toLowerCase()}</Icon>
                </span>
            </div>
        </div>
    );
}