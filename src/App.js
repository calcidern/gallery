import React, {Component} from 'react';
// import {Velocirator} from './components/Velociraptor';
import {TigerCub} from './components/TigerCub';
import {Morty} from './components/Morty';
// import {Kitten} from './components/Kitten';
// import {Flower} from './components/Flower';
import {Bird} from './components/Bird';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TigerCub/>
        <Morty/>
        <Bird/>
        {/*<Velocirator/>*/}
        {/*<Kitten/>*/}
        {/*<Flower/>*/}
      </div>
    );
  }
}

export default App;
