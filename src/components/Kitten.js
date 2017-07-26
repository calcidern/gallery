/**
 * Created by calcidern on 26.07.2017.
 */

import React from 'react';
import './Kitten.css';

export const Kitten = () => {
  return (
    <div className="kitten">
      <div className="kitten__ear  kitten__ear-right"/>
      <div className="kitten__ear  kitten__ear-left"/>

      <div className="kitten__eyes">

        <div className="kitten__eye kitten__eye--left">
        </div>
        <div className="kitten__eye kitten__eye--right">
        </div>
      </div>

    </div>
  )
};