import React from 'react';

import pic from '../icons/icons8-drop-down-64.png'


export default function ImageIcon() {
  return (
    <img
      src={pic}
      alt='icon'
      className="custom-icon"
      width="24" height="24"
    />
  );
}