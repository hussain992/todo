import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {store} from './Redux/Store';
import HomeContainer from './Home/HomeContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeContainer/>
      </Provider>
    );
  }
}

export default App;
