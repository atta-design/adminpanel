import React from 'react';

import pic from '../icons/icons8-monitor-24.png'


export default function Item(data) {
  return (
    <div className="custom-item" dir="rtl">
      <img src={pic} alt="item"/>
      <div className="product-name">{data.Name}</div>
    </div>
  );
}