import React, { useEffect, useState } from 'react';
import makeStyles from '../CardPontuacao/styles.js';
import { Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon'

export default function CardPontuacao(props) {
    const classes = makeStyles();
    const { cardPontuacao } = props;

    useEffect(() => {

    })
    console.log('renderizou o card');
    
    return (
        <div className={`${cardPontuacao.corBorda} ${classes.cardPontuacao}`}>
            <div className={classes.cardPontuacaoTitulo}>{cardPontuacao.titulo}</div>
            <div className={classes.cardPontuacaoValor}>
                <Typography>
                    {cardPontuacao.valor}
                </Typography>
                <span className={`${cardPontuacao.corBorda} ${classes.cardPontuacaoIcone}`}>
                    <Icon>{cardPontuacao?.icone?.toLowerCase()}</Icon>
                </span>
            </div>
        </div>
    );
}