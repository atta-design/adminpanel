import React from 'react';

import { Toast } from 'devextreme-react/toast';


export const toastContext = React.createContext();


export function ToastProvider({ children }) {

    const [toastConfig, setToastConfig] = React.useState([{
        isVisible: false,
        type: 'info',
        message: '',
    }]);

    const showToast = (isVisible, message, type) => {

        setToastConfig(
            [...toastConfig, { isVisible, message, type }]
        );
    }


    return (
        <toastContext.Provider value={{ showToast }}>
            {toastConfig.map((toast, i) => (
                <Toast
                    type={toast.type}
                    displayTime={3000}
                    id={`toastitem${i}`}
                    key={`toast-item${i}`}
                    message={toast.message}
                    visible={toast.isVisible}
                    onHiding={() => {
                        setToastConfig(
                            [...toastConfig.slice(0, i), '', ...toastConfig.slice(i + 1)]
                        );
                    }}
                />
            ))}
            {children}
        </toastContext.Provider>
    );
}
