import React from 'react';
import {Panel} from '../containers/Panel';
import './Ghost.css';

export const Ghost = () => {
  return (
    <Panel name="Ghost" color="black">
      <div className="ghost">
        <div className="ghost__eyes">
          <div className="ghost_eye"></div>
          <div className="ghost_eye"></div>
        </div>
        <div className="ghost__feet">
          <div className="ghost__foot ghost__foot--left">
          </div>
          <div className="ghost__foot ghost__foot--right">
          </div>
        </div>
      </div>
    </Panel>
  );
};