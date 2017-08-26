/**
 * Created by calcidern on 21.07.2017.
 */


import React from 'react';
import {Panel} from '../containers/Panel';
import './Morty.css';

export const Morty = () => {
  return (
    <Panel name="Morty" lastUpdated="No" color="#e5c62f">
      <div className="morty__face">
        <div className="morty__hair">
        </div>
        <div className="morty__eyes">
          <div className="morty__eye">
            <div className="morty__eye-brow--left">
            </div>
          </div>
          <div className="morty__eye">
            <div className="morty__eye-brow--right">
            </div>
          </div>
        </div>
        <div className="morty__nose">
        </div>
        <div className="morty__mouth">
        </div>
      </div>
    </Panel>

  );
};