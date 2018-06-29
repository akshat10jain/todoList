import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './static/css/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Routes from './routes'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: ' ToDo App'
    }

  }

  render() {
    return (
      <div>
      <nav className="navbar navbar-default"
       style={{backgroundColor:'rgb(0, 151, 167)',
      fontFamily: 'Roboto, sans-serif',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      boxShadow:'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
      
      
      }} >
  <div className="container-fluid">
    <div className="navbar-header"  >
      <a className="navbar-brand" href="#"
       style={{ transform: 'translateX(-50%)',left: '50%',position: 'absolute',color:'#fff'}}>{this.state.title}</a>
    </div>
    
  </div>
</nav>
  <MuiThemeProvider>
          <Routes />
        </MuiThemeProvider>

</div>


      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">{this.state.title}</h1>
      //   </header>
      //   <MuiThemeProvider>
      //     <Routes />
      //   </MuiThemeProvider>
      // </div>
    );
  }
}

export default App;
