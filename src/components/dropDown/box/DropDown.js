import React from 'react';

import {DropDownBoxConfig} from './config';

import TreeView from 'devextreme-react/tree-view';

import 'devextreme/dist/css/dx.light.css';
 
import DropDownBox from 'devextreme-react/drop-down-box';

import { Validator } from 'devextreme-react/validator';

import DataGrid, {
    Paging,
    Selection,
    FilterRow,
    Scrolling,
} from 'devextreme-react/data-grid';


class DropDownBoxComponent extends React.Component {

    constructor(props) {
        super(props);
        
        this.treeView = null;
        
        this.children = props.children;
        
        if (props.config) {
            this.config = props.config;
        } else {
            this.config = DropDownBoxConfig;
        }

        this.type = this.config.embedded.selectionMode;

        this.state = {
            isEmbeddedOpened: false,
            embeddedValue: this.config.embedded.defautlValue,
        };

        if (props.onValueChanged) {
            this.onValueChanged = props.onValueChanged;
        } else {
            this.onValueChanged = this.config.settings.methods.onValueChanged;
        }

        if (props.dataSource) {
            this.dataSource = props.dataSource;
        } else {
            this.dataSource = this.config.settings.dataSource;
        }

        if (props.validationRules) {
            this.config.validationRules.push.apply(
                this.config.validationRules,
                props.validationRules
            )
        }

        if (this.config.settings.dropDownButtonTemplate) {
            this.dropDownButtonTemplate = this.config.settings.dropDownButtonTemplate;
        } else {
            this.dropDownButtonTemplate = "dropDownButton";
        }

        if (this.config.settings.contentTemplate) {
            this.ContentTemplate = this.config.settings.contentTemplate;
        } else {
            this.ContentTemplate = "content";
        }

        this.renderEmbedded = this.renderEmbedded.bind(this);
        this.onTreeItemClick = this.onTreeItemClick.bind(this);
        this.onOptionChanged = this.onOptionChanged.bind(this);
        this.syncEmbeddedSelection = this.syncEmbeddedSelection.bind(this);
        this.treeViewOnContentReady = this.treeViewOnContentReady.bind(this);
        this.dataGridOnSelectionChanged = this.dataGridOnSelectionChanged.bind(this);
        this.treeViewItemSelectionChanged = this.treeViewItemSelectionChanged.bind(this);     
    }

    // tree settings ##########################################
    onTreeItemClick() {
        this.setState({
            isEmbeddedOpened: false,
        });
    }

    treeViewOnContentReady(e) {

        if (this.type === 'single') {
            e.component.selectItem(this.state.embeddedValue);
        } else {
            const treeView = (e.component.selectItem && e.component)
                || (this.treeView && this.treeView.instance);

            if (treeView) {
                if (e.value === null) {
                    treeView.unselectAll();
                } else {
                    const values = e.value || this.state.treeBoxValue;
                    values && values.forEach((value) => {
                    treeView.selectItem(value);
                    });
                }
            }

            if (e.value !== undefined) {
                this.setState({
                    treeBoxValue: e.value,
                });
            }
        }
    }

    treeViewItemSelectionChanged(e) {
        this.setState({
            embeddedValue: e.component.getSelectedNodeKeys(),
        });
    }
    // ########################################################

    // grid settings ##########################################

    dataGridOnSelectionChanged(e) {

        if (this.type === 'single'){
            this.setState({
                isEmbeddedOpened: false,
                embeddedValue: e.selectedRowKeys,
            });
        } else {
            this.setState({
                embeddedValue: (e.selectedRowKeys.length && e.selectedRowKeys) || [],
            });
        }
    }
    // ########################################################

    
    onOptionChanged(e) {
        if (e.name === 'opened') {
            this.setState({
                isEmbeddedOpened: e.value,
            });
        }
    }

    syncEmbeddedSelection(e) {

        if (this.type === 'single') {
            this.setState({
                embeddedValue: e.value,
            });
    
            if (this.config.embedded.type !== 'grid') {
    
                if (!this.treeView) return;
    
                if (!e.value) {
                    this.treeView.instance.unselectAll();
                } else {
                    this.treeView.instance.selectItem(e.value);
                }
            }
        } else {

            if (this.config.embedded.type !== 'grid') {
                const treeView = (e.component.selectItem && e.component)
                    || (this.treeView && this.treeView.instance);

                if (treeView) {
                    if (e.value === null) {
                        treeView.unselectAll();
                    } else {
                        const values = e.value || this.state.treeBoxValue;
                        values && values.forEach((value) => {
                        treeView.selectItem(value);
                        });
                    }
                }

                if (e.value !== undefined) {
                this.setState({
                    treeBoxValue: e.value,
                });
                }

            } else {
                this.setState({
                    gridBoxValue: e.value || [],
                });
            }

        }


    }

    renderEmbedded(){

        if (this.config.embedded.type === 'grid') {

            return(
                <DataGrid
                    height="100%"
                    hoverStateEnabled={true}
                    dataSource={this.dataSource}
                    keyExpr={this.config.settings.valueExpr}
                    columns={this.config.gridSettings.columns}
                    selectedRowKeys={this.state.embeddedValue}
                    rtlEnabled={this.config.gridSettings.rtlEnabled}
                    onSelectionChanged={this.dataGridOnSelectionChanged}
                >
                    <Selection mode={this.config.embedded.selectionMode} />
                    <Scrolling mode={this.config.gridSettings.scrollingMode} />
                    <FilterRow visible={this.config.gridSettings.filterRowVisible} />
                    <Paging
                        enabled={this.config.gridSettings.paging.enabled}
                        pageSize={this.config.gridSettings.paging.pageSize}
                    />
                </DataGrid>
            )
        } else {
            
            return(
                <TreeView
                    selectByClick={true}
                    dataSource={this.dataSource}
                    onItemClick={this.onTreeItemClick}
                    ref={(ref) => { this.treeView = ref; }}
                    keyExpr={this.config.settings.valueExpr}
                    onContentReady={this.treeViewOnContentReady}
                    displayExpr={this.config.settings.displayExpr}
                    selectionMode={this.config.embedded.selectionMode}
                    parentIdExpr={this.config.treeSettings.parentIdExpr}
                    dataStructure={this.config.treeSettings.dataStructure}
                    onItemSelectionChanged={this.treeViewItemSelectionChanged}
                    selectNodesRecursive={this.config.treeSettings.selectNodesRecursive}
                    showCheckBoxesMode={
                        this.type === 'single' ? 'none' :this.config.treeSettings.showCheckBoxesMode
                    }
                />
            )
        };

    }

    
    render() {
        return (
            <DropDownBox
                id={this.config.settings.id}
                dataSource={this.dataSource}
                text={this.config.settings.text}
                name={this.config.settings.name}
                hint={this.config.settings.hint}
                value={this.state.embeddedValue}
                label={this.config.settings.label}
                width={this.config.settings.width}
                contentRender={this.renderEmbedded}
                height={this.config.settings.height}
                opened={this.state.isEmbeddedOpened}
                onOptionChanged={this.onOptionChanged}
                ContentTemplate={this.ContentTemplate}
                visible={this.config.settings.visible}
                disabled={this.config.settings.disabled}
                readOnly={this.config.settings.readOnly}
                tabIndex={this.config.settings.tabIndex}
                valueExpr={this.config.settings.valueExpr}
                labelMode={this.config.settings.labelMode}
                className={this.config.settings.className}
                maxLength={this.config.settings.maxLength}
                inputAttr={this.config.settings.inputAttr}
                onCut={this.config.settings.methods.onCut}
                onValueChanged={this.syncEmbeddedSelection}
                rtlEnabled={this.config.settings.rtlEnabled}
                onCopy={this.config.settings.methods.onCopy}
                elementAttr={this.config.settings.elementAttr}
                onInput={this.config.settings.methods.onInput}
                onKeyUp={this.config.settings.methods.onKeyUp}
                onPaste={this.config.settings.methods.onPaste}
                fieldRender={this.config.settings.fieldRender}
                displayExpr={this.config.settings.displayExpr}
                placeholder={this.config.settings.placeholder}
                stylingMode={this.config.settings.stylingMode}
                onOpened={this.config.settings.methods.onOpened}
                onChange={this.config.settings.methods.onChange}
                onClosed={this.config.settings.methods.onClosed}
                onFocusIn={this.config.settings.methods.onFocusIn}
                onKeyDown={this.config.settings.methods.onKeyDown}
                dropDownButtonTemplate={this.dropDownButtonTemplate}
                fieldComponent={this.config.settings.fieldComponent}
                onEnterKey={this.config.settings.methods.onEnterKey}
                onFocusOut={this.config.settings.methods.onFocusOut}
                deferRendering={this.config.settings.deferRendering}
                onDisposing={this.config.settings.methods.onDisposing}
                dropDownOptions={this.config.settings.dropDownOptions}
                showClearButton={this.config.settings.showClearButton}
                openOnFieldClick={this.config.settings.openOnFieldClick}
                valueChangeEvent={this.config.settings.valueChangeEvent}
                contentComponent={this.config.settings.ContentComponent}
                onInitialized={this.config.settings.methods.onInitialized}
                hoverStateEnabled={this.config.settings.hoverStateEnabled}
                focusStateEnabled={this.config.settings.focusStateEnabled}
                acceptCustomValue={this.config.settings.acceptCustomValue}
                showDropDownButton={this.config.settings.showDropDownButton}
                activeStateEnabled={this.config.settings.activeStateEnabled}
            >
                <Validator validationRules={this.config.validationRules} />
                {this.children}
            </DropDownBox>
        );
    }
}
 
export default DropDownBoxComponent;