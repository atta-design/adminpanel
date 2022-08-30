import React from 'react';

import {SelectBoxConfig} from './config';

import 'devextreme/dist/css/dx.light.css';
 
import SelectBox from 'devextreme-react/select-box';

import { Validator } from 'devextreme-react/validator';


class SelectBoxComponent extends React.Component {

    constructor(props) {
        super(props);

        this.children = props.children

        if (props.config) {
            this.config = props.config
        } else {
            this.config = SelectBoxConfig
        }

        if (props.onValueChanged) {
            this.onValueChanged = props.onValueChanged
        } else {
            this.onValueChanged = this.config.settings.methods.onValueChanged
        }

        if (props.onItemClick) {
            this.onItemClick = props.onItemClick
        } else {
            this.onItemClick = this.config.settings.methods.onItemClick
        }

        if (props.dataSource) {
            this.dataSource = props.dataSource
        } else {
            this.dataSource = this.config.settings.dataSource
        }

        if (props.validationRules) {
            this.config.validationRules.push.apply(
                this.config.validationRules,
                props.validationRules
            )
        }

        if (this.config.settings.dropDownButtonTemplate) {
            this.dropDownButtonTemplate = this.config.settings.dropDownButtonTemplate
        } else {
            this.dropDownButtonTemplate = "dropDownButton"
        }

        if (props.defaultValue) {
            this.defaultValue = props.defaultValue
        } else {
            this.defaultValue = ''
        }
        
    }


    
    render() {
        return (
            <SelectBox
                id={this.config.settings.id}
                dataSource={this.dataSource}
                onItemClick={this.onItemClick}
                defaultValue={this.defaultValue}
                name={this.config.settings.name}
                text={this.config.settings.text}
                hint={this.config.settings.hint}
                label={this.config.settings.label}
                style={this.config.settings.style}
                width={this.config.settings.width}
                height={this.config.settings.height}
                onValueChanged={this.onValueChanged}
                visible={this.config.settings.visible}
                grouped={this.config.settings.grouped}
                readOnly={this.config.settings.readOnly}
                disabled={this.config.settings.disabled}
                tabIndex={this.config.settings.tabIndex}
                maxLength={this.config.settings.maxLength}
                valueExpr={this.config.settings.valueExpr}
                labelMode={this.config.settings.labelMode}
                className={this.config.settings.className}
                inputAttr={this.config.settings.inputAttr}
                onCut={this.config.settings.methods.onCut}
                spellcheck={this.config.settings.spellcheck}
                searchExpr={this.config.settings.searchExpr}
                noDataText={this.config.settings.noDataText}
                searchMode={this.config.settings.searchMode}
                itemRender={this.config.settings.itemRender}
                rtlEnabled={this.config.settings.rtlEnabled}
                onCopy={this.config.settings.methods.onCopy}
                displayExpr={this.config.settings.displayExpr}
                placeholder={this.config.settings.placeholder}
                stylingMode={this.config.settings.stylingMode}
                groupRender={this.config.settings.groupRender}
                fieldRender={this.config.settings.fieldRender}
                elementAttr={this.config.settings.elementAttr}
                onInput={this.config.settings.methods.onInput}
                onKeyUp={this.config.settings.methods.onKeyUp}
                onPaste={this.config.settings.methods.onPaste}
                onOpened={this.config.settings.methods.onOpened}
                onChange={this.config.settings.methods.onChange}
                onClosed={this.config.settings.methods.onClosed}
                displayValue={this.config.settings.displayValue}
                wrapItemText={this.config.settings.wrapItemText}
                searchTimeout={this.config.settings.searchTimeout}
                itemComponent={this.config.settings.itemComponent}
                searchEnabled={this.config.settings.searchEnabled}
                onFocusIn={this.config.settings.methods.onFocusIn}
                onKeyDown={this.config.settings.methods.onKeyDown}
                groupComponent={this.config.settings.groupComponent}
                fieldComponent={this.config.settings.fieldComponent}
                deferRendering={this.config.settings.deferRendering}
                dropDownButtonTemplate={this.dropDownButtonTemplate}
                onEnterKey={this.config.settings.methods.onEnterKey}
                onFocusOut={this.config.settings.methods.onFocusOut}
                onDisposing={this.config.settings.methods.onDisposing}
                minSearchLength={this.config.settings.minSearchLength}
                showClearButton={this.config.settings.showClearButton}
                valueChangeEvent={this.config.settings.valueChangeEvent}
                onInitialized={this.config.settings.methods.onInitialized}
                hoverStateEnabled={this.config.settings.hoverStateEnabled}
                focusStateEnabled={this.config.settings.focusStateEnabled}
                acceptCustomValue={this.config.settings.acceptCustomValue}
                useItemTextAsTitle={this.config.settings.useItemTextAsTitle}
                showDropDownButton={this.config.settings.showDropDownButton}
                activeStateEnabled={this.config.settings.activeStateEnabled}
                onContentReady={this.config.settings.methods.onContentReady}
                onOptionChanged={this.config.settings.methods.onOptionChanged}
                showDataBeforeSearch={this.config.settings.showDataBeforeSearch}
                dropDownButtonRender={this.config.settings.dropDownButtonRender}
                showSelectionControls={this.config.settings.showSelectionControls}
                onSelectionChanged={this.config.settings.methods.onSelectionChanged}
                onCustomItemCreating={this.config.settings.methods.onCustomItemCreating}
            >
                <Validator
                    validationRules={this.config.validationRules}
                >
                </Validator>
                {this.children}
            </SelectBox>
        );
    }
}
 
export default SelectBoxComponent;