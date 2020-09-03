import React from 'react';
import makeStyles from '../CardPontuacao/styles.js';
import { Typography } from '@material-ui/core';

export default function CardPontuacao(props) {
    const classes = makeStyles();
    const { titulo } = props;
    const { valor } = props;
    const { corBorda } = props;

    return (
        <div className={`${corBorda} ${classes.cardPontuacao}`}>
            <div className={classes.cardPontuacaoTitulo}>{titulo}</div>
            <div className={classes.cardPontuacaoValor}>
                <Typography>
                    {valor}
                </Typography>
            </div>
        </div>
    );
}