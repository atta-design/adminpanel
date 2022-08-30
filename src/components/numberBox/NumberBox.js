import React from 'react';
 
import 'devextreme/dist/css/dx.light.css';
 
import {NumberBoxConfig} from './config';

import NumberBox from 'devextreme-react/number-box';

import { Validator } from 'devextreme-react/validator';


class NumberBoxComponent extends React.Component {

    constructor(props) {
        super(props);

        if (props.config) {
            this.config = props.config
        } else {
            this.config = NumberBoxConfig
        }

        if (props.onValueChanged) {
            this.onValueChanged = props.onValueChanged
        } else {
            this.onValueChanged = this.config.settings.methods.onValueChanged
        }
    }

    render() {
        return(
            <NumberBox
                id={this.config.settings.id}
                max={this.config.settings.max}
                min={this.config.settings.min}
                step={this.config.settings.step}
                text={this.config.settings.text}
                name={this.config.settings.name}
                hint={this.config.settings.hint}
                mode={this.config.settings.mode}
                label={this.config.settings.label}
                width={this.config.settings.width}
                height={this.config.settings.height}
                format={this.config.settings.format}
                onValueChanged={this.onValueChanged}
                visible={this.config.settings.visible}
                disabled={this.config.settings.disabled}
                readOnly={this.config.settings.readOnly}
                tabIndex={this.config.settings.tabIndex}
                className={this.config.settings.className}
                inputAttr={this.config.settings.inputAttr}
                labelMode={this.config.settings.labelMode}
                onCut={this.config.settings.methods.onCut}
                onCopy={this.config.settings.methods.onCopy}
                rtlEnabled={this.config.settings.rtlEnabled}
                elementAttr={this.config.settings.elementAttr}
                placeholder={this.config.settings.placeholder}
                stylingMode={this.config.settings.stylingMode}
                onPaste={this.config.settings.methods.onPaste}
                onInput={this.config.settings.methods.onInput}
                onKeyUp={this.config.settings.methods.onKeyUp}
                onChange={this.config.settings.methods.onChange}
                onKeyDown={this.config.settings.methods.onKeyDown}
                onFocusIn={this.config.settings.methods.onFocusIn}
                showSpinButton={this.config.settings.showSpinButton}
                onEnterKey={this.config.settings.methods.onEnterKey}
                onFocusOut={this.config.settings.methods.onFocusOut}
                onDisposing={this.config.settings.methods.onDisposing}
                showClearButton={this.config.settings.showClearButton}
                valueChangeEvent={this.config.settings.valueChangeEvent}
                onInitialized={this.config.settings.methods.onInitialized}
                hoverStateEnabled={this.config.settings.hoverStateEnabled}
                focusStateEnabled={this.config.settings.focusStateEnabled}
                onContentReady={this.config.settings.methods.onContentReady}
                activeStateEnabled={this.config.settings.activeStateEnabled}
                onOptionChanged={this.config.settings.methods.onOptionChanged}
                invalidValueMessage={this.config.settings.invalidValueMessage}
                validationMessageMode={this.config.settings.validationMessageMode}
            >
                <Validator
                    validationRules={this.config.validationRules}
                ></Validator>
            </NumberBox>
        );
    }
}

export default NumberBoxComponent;