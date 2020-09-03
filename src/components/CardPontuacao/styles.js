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
        color: '#6666'
    },
    cardPontuacaoValor: {
        '& p': {
            fontSize: '30px'
        }
       
    }
}));