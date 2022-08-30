import React from 'react';

import { toastContext } from './toastProvider';


export function useToast() {

    const { showToast } = React.useContext(toastContext);

    
    return {
        showMessage: showToast
    };
}
