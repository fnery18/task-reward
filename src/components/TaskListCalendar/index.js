import React, { useState, useEffect } from 'react';
import makeStyles from './styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Typography, Divider } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Box from '@material-ui/core/Box';


export default function TaskListCalendar(props) {
    const { handleTaskChange } = props;
    const { tasks } = props;
    const { handleTaskDelete } = props;
    const classes = makeStyles();

    const dayName = new Array("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");
    const monName = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Outubro", "Novembro", "Dezembro");
    const now = new Date;

    const [tasksChecked, setTasksChecked] = useState([]);

    function handleTaskToggle (taskId) {
        const currentIndex = tasksChecked.indexOf(taskId);
        const tasksCheckedAux = [...tasksChecked];

        let querCompletar = currentIndex === -1;

        console.log('estacompleta', querCompletar);
        if (querCompletar) {
            tasksCheckedAux.push(taskId);
            handleTaskChange(true, taskId);
        } else {
            tasksCheckedAux.splice(currentIndex, 1);
            handleTaskChange(false, taskId);
        }

        setTasksChecked(tasksCheckedAux);
    };

    useEffect(() => {

    }, []);

    useEffect(() => {

    })
    return (
        <>
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
                        {tasks.map((task, index) => {
                            const labelId = `checkbox-list-label-${index}`;

                            return (
                                <ListItem key={task.id} role={undefined} dense button onClick={(taskId) => handleTaskToggle(task.id)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={tasksChecked.indexOf(task.id) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={task.descricao} />
                                    <ListItemSecondaryAction onClick={(idTask) => handleTaskDelete(task.id)}>
                                        <IconButton edge="end" aria-label="Excluir">
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
            </div>

            <br />

        </>
    );
}