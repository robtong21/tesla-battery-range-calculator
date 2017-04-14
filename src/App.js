import React from 'react';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Header from './components/Header/Header';
import TeslaBattery from './containers/TeslaBattery';
import appReducer from './reducers/teslaRangeApp'

const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const counterDefaultVal = {
  speed: {
    title: "Speed",
    unit: "mph",
    step: 5,
    min: 45,
    max: 70
  },
  temperature: {
    title: "Outside Temperature",
    unit: "°",
    step: 10,
    min: -10,
    max: 40
  }
};

class App extends React.Component {
  render() {
    return (
      <Provider store={ store } >
      <div>
        <Header />
        <TeslaBattery counterDefaultVal={counterDefaultVal} />
      </div>
      </Provider>
    );
  }
}

export default App;
