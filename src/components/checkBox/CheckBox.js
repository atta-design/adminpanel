import React from 'react';

import {CheckBoxConfig} from './config';

import 'devextreme/dist/css/dx.light.css';
 
import { CheckBox } from 'devextreme-react/check-box';


class CheckBoxComponent extends React.Component {

    constructor(props) {
        super(props);

        if (props.config) {
            this.config = props.config
        } else {
            this.config = CheckBoxConfig
        }

        if (props.onValueChanged) {
            this.onValueChanged = props.onValueChanged
        } else {
            this.onValueChanged = this.config.settings.methods.onValueChanged
        }

        if (props.defaultValue) {
            this.defaultValue = props.defaultValue
        } else {
            this.defaultValue = false
        }
    }


    render() {
        return (
            <CheckBox
                id={this.config.settings.id}
                hint={this.config.settings.hint}
                name={this.config.settings.name}
                defaultValue={this.defaultValue}
                width={this.config.settings.width}
                height={this.config.settings.height}
                layout={this.config.settings.layout}
                onValueChanged={this.onValueChanged}
                visible={this.config.settings.visible}
                isValid={this.config.settings.isValid}
                disabled={this.config.settings.disabled}
                readOnly={this.config.settings.readOnly}
                tabIndex={this.config.settings.tabIndex}
                className={this.config.settings.className}
                valueExpr={this.config.settings.valueExpr}
                rtlEnabled={this.config.settings.rtlEnabled}
                itemRender={this.config.settings.itemRender}
                dataSource={this.config.settings.dataSource}
                elementAttr={this.config.settings.elementAttr}
                displayExpr={this.config.settings.displayExpr}
                itemComponent={this.config.settings.itemComponent}
                onDisposing={this.config.settings.methods.onDisposing}
                onInitialized={this.config.settings.methods.onInitialized}
                hoverStateEnabled={this.config.settings.hoverStateEnabled}
                focusStateEnabled={this.config.settings.focusStateEnabled}
                activeStateEnabled={this.config.settings.activeStateEnabled}
                onContentReady={this.config.settings.methods.onContentReady}
                onOptionChanged={this.config.settings.methods.onOptionChanged}            
            >
            </CheckBox>
        );
    }
}
 
export default CheckBoxComponent;