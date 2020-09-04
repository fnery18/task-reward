import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    containerPontos: {
        display: 'flex',
        width: '100%',
        '& div:nth-of-type(1)': {
            flexGrow: 1,
        },
        '& div:nth-of-type(2)': {
            flexGrow: 1,
        },
        '& div:nth-of-type(3)': {
            flexGrow: 1,
        }
    },
    divCards: {
        margin: '10px',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)'
    },
    divAcoes: {
        textAlign: 'right'
    }
}));