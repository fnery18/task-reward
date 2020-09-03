import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    cardPontuacao: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        padding: '20px',
        backgroundColor: '#fff'
    },
    cardPontuacaoTitulo: {
        fontStyle: 'italic',
        fontSize: '14px',
        color: '#999',
        textTransform: 'uppercase',
        textAlign: 'right'
    },
    cardPontuacaoValor: {
        textAlign: 'right',
        '& p': {
            fontSize: '30px'
        }
       
    },
    cardPontuacaoIcone: {
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(156, 39, 176,.4)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        padding: '15px',
        marginTop: '-100px',
        borderRadius: '3px',
        marginRight: '15px',
        width: '70px',
        float: 'left',
        '& svg':{
            fontSize: '35px',
        }
    }
}));