import React, {Component} from 'react';
import {Velocirator} from './components/Velociraptor';
import {TigerCub} from './components/TigerCub';
import {Panel} from './containers/Panel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Panel name="Velociraptor" lastUpdated="Yesterday">
          <Velocirator/>
        </Panel>
        <Panel name="Tiger Cub" lastUpdated="Today" color="#E56262">
          <TigerCub/>
        </Panel>
      </div>
    );
  }
}

export default App;
