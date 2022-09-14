import React from 'react';

import CustomStore from 'devextreme/data/custom_store';

import { Template } from 'devextreme-react/core/template';

import { Autocomplete } from 'devextreme-react/autocomplete';

import {ChipsConfig} from './configs/config';

import IndicatorIcon from './configs/indicatorIcon.js';

import 'devextreme/dist/css/dx.light.css';


class Chips extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            values: props.defaultValue || [],
            isLoaded: true
        };

        if (props.filterParams) {
            this.filterParams = props.filterParams.filter(
                (data) => Boolean(data)
            ).map(
                (data) => `&${data}`
            ).join('')
        } else {
            this.filterParams = ''
        }

        if (props.setValue) {
            this.setValue = props.setValue
        } else {
            this.setValue = null
        }

        if (props.config) {
            this.config = props.config
        } else {
            this.config = ChipsConfig
        }

        if (props.validationRules) {
            this.config.validationRules.push.apply(
                this.config.validationRules,
                props.validationRules
            )
        }

        this.dropDownButtonTemplate = "loadIndicator"

        this.dataSource = new CustomStore({
            loadMode: 'processed',
            key: this.config.settings.key,
            load: (loadOptions) => {
                this.setState({isLoaded: false});
                let searchValue = loadOptions.searchValue;
                let params = `?search=${searchValue}`;
                let url = this.config.settings.dataSource + params + this.filterParams;
                return fetch(url)
                    .then("error")
                    .then(response => response.json())
                    .then(result => {
                        this.setState({isLoaded: true})
                        return result.content;
                    })
                    .catch(() => { throw Error('Network error') });
            }
        });

        this.onItemClick = this.onItemClick.bind(this);
        this.closeHandler = this.closeHandler.bind(this);
    }

    closeHandler(item) {
        let newValues = [...this.state.values];
        let index = newValues.indexOf(item);

        newValues.splice(index, 1);
        this.setState({
            values: newValues
        });

        if (this.setValue) {
            this.setValue(newValues);
        }
    }


    onItemClick(e) {

        this.setState({
            values: [
                ...this.state.values,
                e.itemData
            ]
        })

        e.component.option('value', "");

        if (this.setValue) {
            this.setValue(this.state.values)
        }
    }

    
    render() {
        return(
            <div>
                <Autocomplete
                    showDropDownButton={true}
                    id={this.config.settings.id}
                    dataSource={this.dataSource}
                    onItemClick={this.onItemClick}
                    text={this.config.settings.text}
                    name={this.config.settings.name}
                    hint={this.config.settings.hint}
                    width={this.config.settings.width}
                    label={this.config.settings.label}
                    onValueChanged={this.onValueChanged}
                    height={this.config.settings.height}
                    visible={this.config.settings.visible}
                    disabled={this.config.settings.disabled}
                    readOnly={this.config.settings.readOnly}
                    tabIndex={this.config.settings.tabIndex}
                    maxLength={this.config.settings.maxLength}
                    inputAttr={this.config.settings.inputAttr}
                    onCut={this.config.settings.methods.onCut}
                    labelMode={this.config.settings.labelMode}
                    valueExpr={this.config.settings.valueExpr}
                    className={this.config.settings.className}
                    itemRender={this.config.settings.itemRender}
                    searchExpr={this.config.settings.searchExpr}
                    searchMode={this.config.settings.searchMode}
                    spellcheck={this.config.settings.spellcheck}
                    rtlEnabled={this.config.settings.rtlEnabled}
                    onCopy={this.config.settings.methods.onCopy}
                    onInput={this.config.settings.methods.onInput}
                    onKeyUp={this.config.settings.methods.onKeyUp}
                    onPaste={this.config.settings.methods.onPaste}
                    elementAttr={this.config.settings.elementAttr}
                    placeholder={this.config.settings.placeholder}
                    stylingMode={this.config.settings.stylingMode}
                    displayValue={this.config.settings.displayValue}
                    wrapItemText={this.config.settings.wrapItemText}
                    maxItemCount={this.config.settings.maxItemCount}
                    onOpened={this.config.settings.methods.onOpened}
                    onChange={this.config.settings.methods.onChange}
                    onClosed={this.config.settings.methods.onClosed}
                    onFocusIn={this.config.settings.methods.onFocusIn}
                    onKeyDown={this.config.settings.methods.onKeyDown}
                    searchTimeout={this.config.settings.searchTimeout}
                    onFocusOut={this.config.settings.methods.onFocusOut}
                    onEnterKey={this.config.settings.methods.onEnterKey}
                    deferRendering={this.config.settings.deferRendering}
                    dropDownButtonTemplate={this.dropDownButtonTemplate}
                    showClearButton={this.config.settings.showClearButton}
                    minSearchLength={this.config.settings.minSearchLength}
                    onDisposing={this.config.settings.methods.onDisposing}
                    valueChangeEvent={this.config.settings.valueChangeEvent}
                    onInitialized={this.config.settings.methods.onInitialized}
                    hoverStateEnabled={this.config.settings.hoverStateEnabled}
                    focusStateEnabled={this.config.settings.focusStateEnabled}
                    useItemTextAsTitle={this.config.settings.useItemTextAsTitle}
                    activeStateEnabled={this.config.settings.activeStateEnabled}
                    onContentReady={this.config.settings.methods.onContentReady}
                    onOptionChanged={this.config.settings.methods.onOptionChanged}
                    onSelectionChanged={this.config.settings.methods.onSelectionChanged}
                >
                    <Template name='loadIndicator' render={() => <IndicatorIcon isLoaded={this.state.isLoaded} /> }/>
                </Autocomplete>
                <div id="chips-selected-list">
                    <ul id="list">
                        {this.state.values.map((value) => <li key={value[this.config.settings.key]}>{value[this.config.settings.valueExpr] || value['name']} <i style={{ "cursor": "pointer" }} className="dx-icon dx-icon-close" onClick={() => this.closeHandler(value)} /></li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Chips;