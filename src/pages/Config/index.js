import React, { useState } from 'react';
import makeStyles from './styles.js';
import clsx from 'clsx';
import Header from '../../components/Header';
import { Typography } from '@material-ui/core';

export default function Config(props) {
    const classes = makeStyles();

    return (
        <>
            <Header tituloHeader="Configurações">
                <Typography>
                    Personalize aqui as variavéis de recompensa de suas tarefas.
                </Typography>
            </Header>
        </>
    );
}