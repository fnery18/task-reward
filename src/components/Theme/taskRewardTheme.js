import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const taskRewardTheme = createMuiTheme({
    overrides: {
        MuiCheckbox: {
            colorSecondary: {
                '&$checked': {
                    color: '#ab47bc',
                },
            },
        },
    },
    palette: {
        primary: {
            main: "#8e24aa"
        },
        background: {
            default: "#eee"
        }
    }
});

export default taskRewardTheme;