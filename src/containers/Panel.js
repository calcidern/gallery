/**
 * Created by calcidern on 20.07.2017.
 */

import React from 'react';
import {ImageFrame} from './ImageFrame';
import './Panel.css';

export const Panel= ({children, name, lastUpdated}) =>{
  return(
    <div className="panel">
      <ImageFrame>
        {children}
      </ImageFrame>
      <h3>
        {name}
      </h3>
      Last updated: {lastUpdated}
    </div>
  )
};