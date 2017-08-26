import React from 'react';
import {Panel} from '../containers/Panel';
import './Bird.css';

export const Bird = () => {
  return (
    <Panel name="Bird" color="#E56262">
      <div className="bird">
        <div className="bird__body">
        </div>
        <div className="bird__head">
          <div className="bird__eye">
          </div>
          <div className="bird__beak">
          </div>
        </div>
        <div className="bird__leg bird__leg--left">
        </div>
        <div className="bird__leg bird__leg--right">
        </div>
        <div className="bird__feet">

        </div>
      </div>
    </Panel>
  );
};