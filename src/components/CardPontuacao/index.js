import React, { useEffect, useState } from 'react';
import makeStyles from '../CardPontuacao/styles.js';
import { Typography } from '@material-ui/core';

export default function CardPontuacao(props) {
    console.log(props)
    const classes = makeStyles();
    const { tipo } = props;
    const { tasks } = props;
    const [cardPontuacao, setCardPontuacao] = useState({});

    const renderizarIcone = function (icone) {

        if (icone) {
            let resolved = require(`@material-ui/icons/${icone}`).default

            return React.createElement(resolved)
        }
    }

    const retornarValorCard = (tipo) => {
        if (tipo === 'completo') {
            return tasks?.filter(c => c.finalizada).length ?? 0;
        } else if (tipo === 'andamento') {
            return tasks?.filter(c => !c.finalizada).length ?? 0;
        }
        else {
            return 3;
        }
    }

    const gerarDadosCard = (tipo) => {
        switch (tipo) {
            case 'completo':
                setCardPontuacao(
                    {
                        corBorda: 'green',
                        titulo: 'Completas',
                        icone: 'Done'
                    })
                break;
            case 'andamento':
                setCardPontuacao(
                    {
                        corBorda: 'red',
                        titulo: 'Andamento',
                        icone: 'Warning'
                    })
                break;
            case 'pontos':
                setCardPontuacao(
                    {
                        titulo: 'Pontos',
                        corBorda: 'yellow',
                        icone: 'EmojiEvents'
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

    })

    return (
        <div className={`${cardPontuacao.corBorda} ${classes.cardPontuacao}`}>
            <div className={classes.cardPontuacaoTitulo}>{cardPontuacao.titulo}</div>
            <div className={classes.cardPontuacaoValor}>
                <Typography>
                    {retornarValorCard(tipo)}
                </Typography>
                <span className={`${cardPontuacao.corBorda} ${classes.cardPontuacaoIcone}`}>
                    {renderizarIcone(cardPontuacao.icone)}
                </span>
            </div>
        </div>
    );
}