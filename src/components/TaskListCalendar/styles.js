import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    containerTaskList: {
        marginTop: '30px',
        border: '0',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '6px',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
        backgroundColor: 'rgba(255,255,255, 0.7)',
        position: 'relative'
    },
    taskListHeader: {
        backgroundColor: '#ab47bc',
        backgroundImage: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(156, 39, 176,.4)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        padding: '15px',
        marginTop: '-20px',
        borderRadius: '3px',
        margin: '0 15px',
        width: '100%',
        '& span:nth-of-type(1)': {
            '& svg:hover': {
                cursor: 'pointer'
            },
            '& svg': {
                marginTop: '5px'
            },
            flexGrow: 1,
            textAlign: "left"
        },
        '& span:nth-of-type(2)': {
            flexGrow: 2,
            textAlign: "center"
        },
        '& span:nth-of-type(3)': {
            '& svg:hover': {
                cursor: 'pointer'
            },
            '& svg': {
                marginTop: '5px'
            },
            flexGrow: 1,
            textAlign: "right"
        },

    },
    taskListBody: {

    }
}));