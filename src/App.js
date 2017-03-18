import React from 'react';

import Header from './components/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  render () {
    return(
      <div>
        <MuiThemeProvider>
          <Header />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
