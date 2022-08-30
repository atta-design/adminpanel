import React from 'react';
 
import 'devextreme/dist/css/dx.light.css';
 
import {TextBoxConfig} from './config';

import TextBox from 'devextreme-react/text-box';

import { Validator } from 'devextreme-react/validator';


class TextBoxComponent extends React.Component {

    constructor(props) {
        super(props);

        if (props.config) {
            this.config = props.config
        } else {
            this.config = TextBoxConfig
        }

        if (props.onValueChanged) {
            this.onValueChanged = props.onValueChanged
        } else {
            this.onValueChanged = this.config.settings.methods.onValueChanged
        }

        if (props.validationRules) {
            this.config.validationRules.push.apply(
                this.config.validationRules,
                props.validationRules
            )
        }

        if (props.defaultValue) {
            this.defaultValue = props.defaultValue
        } else {
            this.defaultValue = ''
        }
    }
    
    
    render() {
        return(
            <TextBox
                id={this.config.settings.id}
                text={this.config.settings.text}
                name={this.config.settings.name}
                hint={this.config.settings.hint}
                mask={this.config.settings.mask}
                mode={this.config.settings.mode}
                defaultValue={this.defaultValue}
                label={this.config.settings.label}
                width={this.config.settings.width}
                height={this.config.settings.height}
                onValueChanged={this.onValueChanged}
                visible={this.config.settings.visible}
                disabled={this.config.settings.disabled}
                maskChar={this.config.settings.maskChar}
                readOnly={this.config.settings.readOnly}
                tabIndex={this.config.settings.tabIndex}
                className={this.config.settings.className}
                inputAttr={this.config.settings.inputAttr}
                labelMode={this.config.settings.labelMode}
                maskRules={this.config.settings.maskRules}
                onCut={this.config.settings.methods.onCut}
                maxLength={this.config.settings.maxLength}
                onCopy={this.config.settings.methods.onCopy}
                rtlEnabled={this.config.settings.rtlEnabled}
                spellcheck={this.config.settings.spellcheck}
                elementAttr={this.config.settings.elementAttr}
                placeholder={this.config.settings.placeholder}
                stylingMode={this.config.settings.stylingMode}
                onPaste={this.config.settings.methods.onPaste}
                onInput={this.config.settings.methods.onInput}
                onKeyUp={this.config.settings.methods.onKeyUp}
                showMaskMode={this.config.settings.showMaskMode}
                onChange={this.config.settings.methods.onChange}
                onKeyDown={this.config.settings.methods.onKeyDown}
                onFocusIn={this.config.settings.methods.onFocusIn}
                useMaskedValue={this.config.settings.useMaskedValue}
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
                maskInvalidMessage={this.config.settings.maskInvalidMessage}
                onOptionChanged={this.config.settings.methods.onOptionChanged}
            >
                <Validator
                    validationRules={this.config.validationRules}
                ></Validator>
            </TextBox>
        );
    }
}

export default TextBoxComponent;