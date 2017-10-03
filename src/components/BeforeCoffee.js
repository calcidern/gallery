import React from 'react';
import {Panel} from '../containers/Panel';
import './BeforeCoffee.css';

export class BeforeCoffee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
  }

  render() {
    return (
      <Panel name="Before Coffee" color="#402009">
        <div className={this.state.on ? "bc" : "bc bc__after-coffee"} onClick={() => {
          console.log(this.state.on);
          this.setState({on: !this.state.on});
        }}>
          <div className="bc__title--before"> Before Coffee</div>
          <div className="bc__title--after"> After Coffee</div>

          <div className="bc__head">
            <div className="bc__eyes">
              <div className="bc__eye"></div>
              <div className="bc__eye"></div>
            </div>
            <div className="bc__mouth"></div>
          </div>
          <div className="bc__cup">
            <div className="bc__steams">
              <div className="steam"></div>
              <div className="steam"></div>
              <div className="steam"></div>
            </div>
            <div className="bc__hand">
              <div className="bc__finger"></div>
              <div className="bc__finger"></div>
              <div className="bc__finger"></div>
              <div className="bc__thumb"></div>
            </div>
          </div>
        </div>
      </Panel>
    );
  };
}