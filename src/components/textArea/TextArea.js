import React from 'react';
 
import 'devextreme/dist/css/dx.light.css';
 
import {TextAreaConfig} from './config';

import TextArea from 'devextreme-react/text-area';


class TextAreaComponent extends React.Component {

    constructor(props) {
        super(props);

        if (props.config) {
            this.config = props.config
        } else {
            this.config = TextAreaConfig
        }

        if (props.onValueChanged) {
            this.onValueChanged = props.onValueChanged
        } else {
            this.onValueChanged = this.config.settings.methods.onValueChanged
        }

        if (props.defaultValue) {
            this.defaultValue = props.defaultValue
        } else {
            this.defaultValue = ''
        }
    }


    render() {
        return(
            <TextArea
                id={this.config.settings.id}
                text={this.config.settings.text}
                name={this.config.settings.name}
                hint={this.config.settings.hint}
                defaultValue={this.defaultValue}
                label={this.config.settings.label}
                width={this.config.settings.width}
                height={this.config.settings.height}
                onValueChanged={this.onValueChanged}
                visible={this.config.settings.visible}
                disabled={this.config.settings.disabled}
                readOnly={this.config.settings.readOnly}
                tabIndex={this.config.settings.tabIndex}
                className={this.config.settings.className}
                inputAttr={this.config.settings.inputAttr}
                labelMode={this.config.settings.labelMode}
                onCut={this.config.settings.methods.onCut}
                maxLength={this.config.settings.maxLength}
                maxHeight={this.config.settings.maxHeight}
                minHeight={this.config.settings.minHeight}
                onCopy={this.config.settings.methods.onCopy}
                rtlEnabled={this.config.settings.rtlEnabled}
                spellcheck={this.config.settings.spellcheck}
                elementAttr={this.config.settings.elementAttr}
                placeholder={this.config.settings.placeholder}
                stylingMode={this.config.settings.stylingMode}
                onPaste={this.config.settings.methods.onPaste}
                onInput={this.config.settings.methods.onInput}
                onKeyUp={this.config.settings.methods.onKeyUp}
                onChange={this.config.settings.methods.onChange}
                onKeyDown={this.config.settings.methods.onKeyDown}
                onFocusIn={this.config.settings.methods.onFocusIn}
                onEnterKey={this.config.settings.methods.onEnterKey}
                onFocusOut={this.config.settings.methods.onFocusOut}
                onDisposing={this.config.settings.methods.onDisposing}
                valueChangeEvent={this.config.settings.valueChangeEvent}
                onInitialized={this.config.settings.methods.onInitialized}
                hoverStateEnabled={this.config.settings.hoverStateEnabled}
                autoResizeEnabled={this.config.settings.autoResizeEnabled}
                focusStateEnabled={this.config.settings.focusStateEnabled}
                onContentReady={this.config.settings.methods.onContentReady}
                activeStateEnabled={this.config.settings.activeStateEnabled}
                onOptionChanged={this.config.settings.methods.onOptionChanged}
            >
            </TextArea>
        );
    }
}

export default TextAreaComponent;