/**
 * Created by calcidern on 20.07.2017.
 */

import React from 'react';
import {Panel} from '../containers/Panel';
import './TigerCub.css';

export const TigerCub = () => {
  return (
    <Panel name="Tiger Cub" lastUpdated="Today" color="#E56262">
      <div className="ear ear-right"></div>
      <div className="ear ear-left"></div>
      <div className="head">
        <div className="stripes-top">
          <div className="stripe">
          </div>
          <div className="stripe">
          </div>
          <div className="stripe">
          </div>
        </div>
        <div className="eyes">

          <div className="eye">
            <div className="gleam">
            </div>
          </div>
          <div className="eye">
            <div className="gleam">
            </div>
          </div>
        </div>
        <div className="muzzle">

        </div>
        <div className="nose">
          <div className="teeth">
            <div className="tooth">
            </div>
            <div className="tooth">
            </div>
          </div>
        </div>
        <div className="stripes-left">
          <div className="stripe">
          </div>
          <div className="stripe">
          </div>
        </div>
        <div className="stripes-right">
          <div className="stripe">
          </div>
          <div className="stripe">
          </div>
        </div>

      </div>
    </Panel>
  );
};