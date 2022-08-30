import React from 'react';

import 'devextreme/dist/css/dx.light.css';

import {RadioGroupConfig} from './config';
 
import RadioGroup from 'devextreme-react/radio-group';


class RadioGroupComponent extends React.Component {

    constructor(props) {

        super(props);

        this.children = props.children

        if (props.config) {
            this.config = props.config
        } else {
            this.config = RadioGroupConfig
        }

        if (props.onValueChanged) {
            this.onValueChanged = props.onValueChanged
        } else {
            this.onValueChanged = this.config.settings.methods.onValueChanged
        }

        if (props.className) {
            this.className = props.className
        } else {
            this.className = this.config.settings.className
        }

        if (props.dataSource || props.items) {
            this.dataSource = props.dataSource || props.items
        } else {
            this.dataSource = this.config.settings.dataSource
        }
    }


    render() {
        return (
            <RadioGroup
                className={this.className}
                id={this.config.settings.id}
                hint={this.config.settings.hint}
                name={this.config.settings.name}
                width={this.config.settings.width}
                layout={this.config.settings.layout}
                height={this.config.settings.height}
                onValueChanged={this.onValueChanged}
                visible={this.config.settings.visible}
                disabled={this.config.settings.disabled}
                readOnly={this.config.settings.readOnly}
                tabIndex={this.config.settings.tabIndex}
                valueExpr={this.config.settings.valueExpr}
                rtlEnabled={this.config.settings.rtlEnabled}
                itemRender={this.config.settings.itemRender}
                dataSource={this.dataSource}
                elementAttr={this.config.settings.elementAttr}
                displayExpr={this.config.settings.displayExpr}
                defaultValue={this.config.settings.defaultValue}
                itemComponent={this.config.settings.itemComponent}
                onDisposing={this.config.settings.methods.onDisposing}
                onInitialized={this.config.settings.methods.onInitialized}
                hoverStateEnabled={this.config.settings.hoverStateEnabled}
                focusStateEnabled={this.config.settings.focusStateEnabled}
                activeStateEnabled={this.config.settings.activeStateEnabled}
                onContentReady={this.config.settings.methods.onContentReady}
                onOptionChanged={this.config.settings.methods.onOptionChanged}            
            >
                {this.children}
            </RadioGroup>
        );
    }
}
 
export default RadioGroupComponent;