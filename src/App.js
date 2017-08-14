import React, {Component} from 'react';
import {Velocirator} from './components/Velociraptor';
import {TigerCub} from './components/TigerCub';
import {Morty} from './components/Morty';
import {Kitten} from './components/Kitten';
import {Flower} from './components/Flower';
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
        <Panel name="Morty" lastUpdated="No" color="#e5c62f">
          <Morty/>
        </Panel>
        <Panel name="Kitten">
          <Kitten/>
        </Panel>
        <Panel name="Flower">
          <Flower/>
        </Panel>
      </div>
    );
  }
}

export default App;
