import React from 'react';
import TextBox from 'devextreme-react/text-box';

import pic from '../icons/icons8-monitor-24.png'


export default function Field(data) {
  return (
    <div className="custom-item" dir="rtl">
      <img src={data && pic} alt='field'/>
      <TextBox className="product-name"
        defaultValue={data && data.Name}
        readOnly={true}/>
    </div>
  );
}
