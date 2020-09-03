import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    cardPontuacao: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        padding: '20px',
    },
    cardPontuacaoTitulo: {
        fontStyle: 'italic',
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    cardPontuacaoValor: {
        '& p': {
            fontSize: '30px'
        }
       
    },
    cardPontuacaoIcone: {
        '& svg':{
            float: 'right',
            marginTop: '-45px',
            fontSize: '35px',
            color: '#fff'
        }
    }
}));