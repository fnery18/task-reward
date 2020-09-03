import React from 'react';
import './App.css';
import Routes from './routes';
import taskRewardTheme from './components/Theme/taskRewardTheme.js'
import { ThemeProvider } from '@material-ui/core/styles';

export default function App() {
  return (
    <ThemeProvider theme={taskRewardTheme}>
      <Routes />
    </ThemeProvider>
  );
}
