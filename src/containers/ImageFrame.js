/**
 * Created by calcidern on 20.07.2017.
 */

import React from 'react';
import './ImageFrame.css';

export const ImageFrame = ({children,style}) => {
  return (
    <div className="frame" style={style}>
      <div className="center">
        {children}
      </div>
    </div>
  )
};