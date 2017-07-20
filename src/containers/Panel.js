/**
 * Created by calcidern on 20.07.2017.
 */

import React from 'react';
import {ImageFrame} from './ImageFrame';
import './Panel.css';

export const Panel= ({children, name, lastUpdated,color=undefined}) =>{
  return(
    <div className="panel">
      <ImageFrame style={{background:color}}>
        {children}
      </ImageFrame>
      <div className="description">
        <h3>
          {name}
        </h3>
        Last updated: {lastUpdated}
      </div>

    </div>
  )
};