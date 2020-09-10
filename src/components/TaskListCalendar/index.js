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
    const { props: { state } } = props;
    const { props: { setState } } = props;

    const classes = makeStyles();
    const dayName = new Array("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");
    const monName = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Outubro", "Novembro", "Dezembro");
    const now = new Date;

    const [checked, setChecked] = useState([0]);

    const handleDelete = (id) => () => {
        let refreshedTasks = state.tasks.filter(c => c.id !== id);

        setState({ ...state, tasks: refreshedTasks })
    }

    const handleToggle = (taskId) => () => {
        const currentIndex = checked.indexOf(taskId);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(taskId);
            state.handleTaskChange(true, taskId);
        } else {
            newChecked.splice(currentIndex, 1);
            state.handleTaskChange(false, taskId);
        }

        setChecked(newChecked);
    };

    useEffect(() => {
        setChecked(state.tasks.filter(c => c.finalizada).map(function (c) {
            return c.id;
        }))
    }, []);

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
                        {state.tasks.map((task, index) => {
                            const labelId = `checkbox-list-label-${index}`;

                            return (
                                <ListItem key={task.id} role={undefined} dense button onClick={handleToggle(task.id)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(task.id) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={task.descricao} />
                                    <ListItemSecondaryAction onClick={handleDelete(task.id)}>
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