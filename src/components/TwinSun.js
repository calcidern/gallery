import React from 'react';
import {Panel} from '../containers/Panel';
import './TwinSun.css';

export default () => {
  return (
    <Panel name="Twin Sun" color="rgb(222,205,143)">
      <div className="ts">
          <div className="ts__planet">
            <div className="ts__mountain"/>
            <div className="ts__mountain ts__mountain--1"/>
            <div className="ts__mountain ts__mountain--1_5"/>
            <div className="ts__mountain ts__mountain--2"/>
            <div className="ts__mountain ts__mountain--2_5"/>
            <div className="ts__mountain ts__mountain--3"/>

            <div className="ts__mountain ts__mountain--6"/>
            <div className="ts__mountain ts__mountain--7"/>
            <div className="ts__mountain ts__mountain--8"/>

            <div className="ts__mountain ts__mountain__back ts__mountain--10"/>
            <div className="ts__mountain ts__mountain__back ts__mountain--10_5"/>
            <div className="ts__mountain ts__mountain__back ts__mountain--11"/>
            <div className="ts__mountain ts__mountain__back ts__mountain--12"/>

            <div className="ts__mountain ts__mountain__back ts__mountain--13"/>
            <div className="ts__mountain ts__mountain__back ts__mountain--14"/>
            <div className="ts__mountain ts__mountain__back ts__mountain--15"/>



          </div>
          <div className="ts__sun--red"/>
          <div className="ts__sun--yellow"/>
      </div>

    </Panel>
  );
};