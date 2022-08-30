import React from 'react';

import 'devextreme/dist/css/dx.light.css';

import {ButtonConfig} from './config';

import { Button } from 'devextreme-react/button';


class ButtonComponent extends React.Component {

    constructor(props) {
        super(props);

        if (props.config) {
            this.config = props.config
        } else {
            this.config = ButtonConfig
        }

        if (props.onClick) {
            this.onClick = props.onClick
        } else {
            this.onClick = this.config.settings.methods.onClick
        }
    }


    render() {
        return(
            <Button
                onClick={this.onClick}
                id={this.config.settings.id}
                text={this.config.settings.text}
                icon={this.config.settings.icon}
                hint={this.config.settings.hint}
                type={this.config.settings.type}
                width={this.config.settings.width}
                height={this.config.settings.height}
                visible={this.config.settings.visible}
                disabled={this.config.settings.disabled}
                tabIndex={this.config.settings.tabIndex}
                className={this.config.settings.className}
                rtlEnabled={this.config.settings.rtlEnabled}
                elementAttr={this.config.settings.elementAttr}
                stylingMode={this.config.settings.stylingMode}
                onDisposing={this.config.settings.methods.onDisposing}
                onInitialized={this.config.settings.methods.onInitialized}
                hoverStateEnabled={this.config.settings.hoverStateEnabled}
                focusStateEnabled={this.config.settings.focusStateEnabled}
                useSubmitBehavior={this.config.settings.useSubmitBehavior}
                activeStateEnabled={this.config.settings.activeStateEnabled}
                onContentReady={this.config.settings.methods.onContentReady}
                onOptionChanged={this.config.settings.methods.onOptionChanged}
            ></Button>
        );
    }
}

export default ButtonComponent;