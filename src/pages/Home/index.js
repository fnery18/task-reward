import React, { useState } from 'react';
import makeStyles from './styles.js';
import Header from '../../components/Header';

export default function Home(props) {
    const classes = makeStyles();

    return (
        <>
            <Header tituloHeader="Home" />
        </>
    );
}