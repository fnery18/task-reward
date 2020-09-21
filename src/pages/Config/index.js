import React, { useEffect, useState } from 'react';
import makeStyles from './styles.js';
import Header from '../../components/Header';

import Badge from '@material-ui/core/Badge';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export default function Config(props) {
    const classes = makeStyles();
    const [categoria, setCategoria] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [pontos, setPontos] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [mensagemAlerta, setMensagemAlerta] = useState('');
    const vertical = 'bottom';
    const horizontal = 'center';

    function handleAlertClose() {
        setIsOpen(false);
    }

    function handleAlertOpen() {
        setIsOpen(true);
    }

    function handleInputCategoria(e) {
        setCategoria(e.target.value);
    }

    function handleInputPontos(e) {
        setPontos(e.target.value);
    }

    function handleDeleteCategoria(nome) {
        let novasCategorias = categorias.filter(c => c.Nome !== nome);

        setCategorias(novasCategorias)
    }

    function camposValidos() {
        let valido = false;

        console.log('find', categorias.find(c => c.Nome === categoria));

        if (categoria.length === 0 || pontos <= 0 || isNaN(pontos)) {
            setMensagemAlerta('Por favor digite a categoria e a pontuação corretamente.')
            setIsOpen(true);
        } else if (categorias.find(c => c.Nome === categoria)) {
            setMensagemAlerta('Já existe uma categoria com esse nome.')
            setIsOpen(true);
        }
        else{
            valido = true;
        }

        return valido;
    }

    function cadastrarCategoria() {
        if (camposValidos()) {
            let novaCategoria = {
                "Nome": categoria,
                "Pontos": parseInt(pontos)
            };

            setCategorias([...categorias, novaCategoria])
            setPontos(0);
            setCategoria('');
        }
    }

    useEffect(() => {
        console.log(categorias);
    })

    return (
        <>
            <Header tituloHeader="Configurações">
                <Typography>
                    Personalize aqui as variavéis de recompensa de suas tarefas.
                </Typography>

                <br />
                <div className={classes.divContainer}>
                    <div className={classes.divHeader}>
                        <Typography>Cadastro de Categorias</Typography>
                    </div>
                    <div className={classes.divBody}>
                        <TextField
                            value={categoria}
                            onChange={handleInputCategoria}
                            autoFocus
                            margin="dense"
                            label="Categoria"
                            type="text"
                        />

                        <TextField
                            value={pontos}
                            onChange={handleInputPontos}
                            autoFocus
                            margin="dense"
                            label="Pontos"
                            type="text"
                        />


                        <div className={classes.divAcoes}>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                endIcon={<AddIcon />}
                                onClick={cadastrarCategoria}
                            >
                                Adicionar
                            </Button>
                        </div>

                        <Divider className={classes.divider} />

                        <Grid container spacing={3}>
                            {categorias.map((cat, index) => (
                                <Grid item xs={1} key={index}>
                                    <Badge badgeContent={cat.Pontos} color="secondary">
                                        <Paper onClick={handleDeleteCategoria(cat.Nome)} className={classes.paper}>{cat.Nome}</Paper>
                                    </Badge>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>

                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={isOpen}
                    onClose={handleAlertClose}
                    autoHideDuration={4000}
                    key={vertical + horizontal}
                >
                    <MuiAlert elevation={6} variant="filled" severity="warning">
                        {mensagemAlerta}
                    </MuiAlert>
                </Snackbar>
            </Header>
        </>
    );
}