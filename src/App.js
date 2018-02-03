import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import {TigerCub} from "./components/TigerCub";
import {Morty} from './components/Morty';
import {Bird} from './components/Bird';
import {Ghost} from './components/Ghost';
import TwinSun from './components/TwinSun';
import {BeforeCoffee} from './components/BeforeCoffee';


import './App.css';

class App extends Component {
  render() {
    const components=[
      <TigerCub/>,
      <Morty/>,
      <Bird/>,
      <Ghost/>,
      <BeforeCoffee/>
    ];

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={()=>components}/>
          <Route path="/:id" component={({match})=>components[match.params.id]||<div>Not yet</div>}/>
          <Route component={<div>Nope</div>}/>

        </Switch>
      </div>
    );
  }
}

export default App;
