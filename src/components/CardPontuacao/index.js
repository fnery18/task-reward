import React from 'react';
import makeStyles from '../CardPontuacao/styles.js';
import { Typography } from '@material-ui/core';

export default function CardPontuacao(props) {
    const classes = makeStyles();
    const { valorCardPontuacao } = props;

    return (
        <div className={`${valorCardPontuacao.corBorda} ${classes.cardPontuacao}`}>
            <div className={classes.cardPontuacaoTitulo}>{valorCardPontuacao.titulo}</div>
            <div className={classes.cardPontuacaoValor}>
                <Typography>
                    {valorCardPontuacao.valor}
                </Typography>
            </div>
        </div>
    );
}