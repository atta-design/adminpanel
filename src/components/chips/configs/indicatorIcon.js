import React from 'react';

import LoadIndicator from 'devextreme-react/load-indicator';


export default function IndicatorIcon({ isLoaded }) {
  return (
    <span>
      <LoadIndicator visible={!isLoaded} />
    </span>
  );
}