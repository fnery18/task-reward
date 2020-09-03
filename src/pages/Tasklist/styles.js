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
        },
    }
}));