import React from 'react';
import LoadIndicator from 'devextreme-react/load-indicator';

import pic from '../icons/icons8-drop-down-64.png'


export default function IndicatorIcon({ isLoaded }) {
  return (
    <span>
      <LoadIndicator visible={!isLoaded} />
      <span hidden={!isLoaded}>
        <img
          alt='indicator'
          src={pic}
          className='custom-icon'
          width="24" height="24"
        />
      </span>
    </span>
  );
}