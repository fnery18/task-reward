import React, { useState } from 'react';
import makeStyles from './styles.js';
import Header from '../../components/Header';
import CardPontuacao from '../../components/CardPontuacao';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Box from '@material-ui/core/Box';

export default function Tasklist(props) {
    const dayName = new Array("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");
    const monName = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Outubro", "Novembro", "Dezembro");
    const now = new Date;
    const classes = makeStyles();

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <>
            <Header tituloHeader="Minha Tasklist">
                <Box className={classes.containerPontos}>
                    <div>
                        <CardPontuacao valor={10} titulo={'Completas'} corBorda={'green'}></CardPontuacao>
                    </div>
                    <div>
                        <CardPontuacao valor={20} titulo={'Andamento'} corBorda={'red'}></CardPontuacao>
                    </div>
                    <div>
                        <CardPontuacao valor={50} titulo={'Pontos'} corBorda={'yellow'}></CardPontuacao>
                    </div>
                </Box>

                <br/>

                <div className={classes.containerTaskList}>
                    <div className={classes.taskListHeader}>
                        <span>
                            <ChevronLeftIcon fontSize="large" />
                        </span>
                        <span>
                            <Typography>
                                {dayName[now.getDay()] + ", " + now.getDate() + " de " + monName[now.getMonth()] + " de " + now.getFullYear()}
                            </Typography>
                        </span>
                        <span>
                            <ChevronRightIcon fontSize="large" />
                        </span>
                    </div>

                    <Box className={classes.taskListBody} >
                        <List className={classes.root}>
                            {[0, 1, 2, 3].map((value) => {
                                const labelId = `checkbox-list-label-${value}`;

                                return (
                                    <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={checked.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={`Tarefa ${value + 1}`} />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="comments">
                                                <CommentIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box>
                </div>
            </Header>
        </>
    );
}