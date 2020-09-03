import React from 'react';
import makeStyles from '../CardPontuacao/styles.js';
import { Typography } from '@material-ui/core';

export default function CardPontuacao(props) {
    const classes = makeStyles();
    const { valorCardPontuacao } = props;

    const renderizarIcone = function(icone){
        console.log(icone)
        let resolved = require(`@material-ui/icons/${icone}`).default

        return React.createElement(resolved)
    }

    return (
        <div className={`${valorCardPontuacao.corBorda} ${classes.cardPontuacao}`}>
            <div className={classes.cardPontuacaoTitulo}>{valorCardPontuacao.titulo}</div>
            <div className={classes.cardPontuacaoValor}>
                <Typography>
                    {valorCardPontuacao.valor}
                </Typography>
                <span className={`${valorCardPontuacao.corBorda} ${classes.cardPontuacaoIcone}`}>
                    {renderizarIcone(valorCardPontuacao.icone)}
                </span>
            </div>
        </div>
    );
}