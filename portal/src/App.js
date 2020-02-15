import React from 'react';
import './styles/App.css';
import Header from './components/Header'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Home from './components/Home'
import Connect from './components/Connect'
import Mock from './components/Mock'
import Discuss from './components/Discuss'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentModule : 'home'
    }
  }

  _onChangeModule = moduleName => this.setState({currentModule : moduleName})

  render() {
    let mainContent = <Home/>
    if(this.state.currentModule === 'discuss') {
      mainContent = <Discuss/>
    }
    if(this.state.currentModule === 'connect') {
      mainContent = <Connect/>
    }
    if(this.state.currentModule === 'mock') {
      mainContent = <Mock/>
    }

    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header current={this.state.currentModule} onChange={this._onChangeModule} />
          {mainContent}
        </div>
      </ThemeProvider>
    )
  }

}

export default App;
