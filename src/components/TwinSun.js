import React from 'react';
import {Panel} from '../containers/Panel';
import './TwinSun.css';

export const TwinSun = () => {
  return (
    <Panel name="Twin Sun" color="rgb(222,205,143)">
      <div className="ts">
          <div className="ts__planet">
            <div className="ts__mountain"/>
            <div className="ts__mountain ts__mountain--1"/>
            <div className="ts__mountain ts__mountain--2"/>
            <div className="ts__mountain ts__mountain--3"/>
            <div className="ts__mountain ts__mountain--4"/>
            <div className="ts__mountain ts__mountain--5"/>
          </div>
          <div className="ts__sun--red"/>
          <div className="ts__sun--yellow"/>
      </div>

    </Panel>
  );
};