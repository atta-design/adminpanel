import React, { useState } from 'react';

import './Grid.css';
import 'devextreme/dist/css/dx.light.css';

import { GridConfig } from './config'

import SelectBox from 'devextreme-react/select-box';
import { TextBox } from 'devextreme-react/text-box';
import { Template } from 'devextreme-react/core/template';
import {
    Item,
    Export,
    Sorting,
    Toolbar,
    Editing,
    DataGrid,
    Grouping,
    FilterRow,
    Selection,
    GroupPanel,
    FilterPanel,
    SearchPanel,
    ColumnFixing,
    HeaderFilter,
    MasterDetail,
    ColumnChooser,
    FilterBuilderPopup,
    Paging,
    OperationDescriptions,
} from 'devextreme-react/data-grid';


const Grid = (props) => {

    let config = null;
    let dataSource = null;

    if (props.config) {
        config = props.config
    } else {
        config = GridConfig
    }

    if (props.dataSource) {
        dataSource = props.dataSource
    } else {
        dataSource = config.settings.dataSource
    }

    const [
        fontSize,
        setFontSize
    ] = useState(config.settings.fontSize);

    const [
        font,
        setFont
    ] = useState(
        config.settings.font ? config.settings.font : 'Chilanka'
    );

    const [
        visibleApplyFilterButton,
        setVisibleApplyFilterButton
    ] = useState(config.settings.visibleApplyFilterButton);
    
    const [
        expanded,
        setExpanded
    ] = useState(config.Grouping.autoExpandAll);

    const [
        applyFilterTypeValue,
        setApplyFilterTypeValue
    ] = useState(
        config.settings.visibleApplyFilterButton ? 'onClick' : 'auto'
    );

    const handleFontSize = (num) => {

        const MaxFontSize = config.settings.MaxFontSize;
        const MinFontSize = config.settings.MinFontSize;
        if (num > MaxFontSize && MaxFontSize) {
            setFontSize(MaxFontSize);
        } else if (num < MinFontSize && MinFontSize) {
            setFontSize(MinFontSize);
        }else {
            setFontSize(num);
        }
    };

    const OnKeyUp = (s, e) => {
        if (e.htmlEvent.keyCode < 48 || e.htmlEvent.keyCode > 56)  
            document.PreventEvent(e.htmlEvent);  
    };

    const Styles = () => {
        
        const Style = {
            fontFamily: font,
            fontSize: fontSize,
        }

        return Style
    };
    
    
    return (
        <div className="Grid">
            <DataGrid
                id={config.settings.id}
                dataSource={dataSource}
                columns={config.columns}
                width={config.settings.width}
                height={config.settings.height}
                keyExpr={config.settings.keyExpr}
                className={config.settings.className}
                noDataText={config.settings.noDataText}
                rtlEnabled={config.settings.rtlEnabled}
                onExporting={config.settings.onExporting}
                showBorders={config.settings.showBorders}
                wordWrapEnabled={config.settings.wordWrapEnabled}
                columnAutoWidth={config.settings.columnAutoWidth}
                customizeColumns={config.settings.customizeColumns}
                remoteOperations={config.settings.remoteOperations}
                showColumnHeaders={config.settings.showColumnHeaders}
                columnResizingMode={config.settings.columnResizingMode}
                allowColumnResizing={config.settings.allowColumnResizing}
                columnHidingEnabled={config.settings.columnHidingEnabled}
                rowAlternationEnabled={config.settings.rowAlternationEnabled}
                allowColumnReordering={config.settings.allowColumnReordering}
                style={Styles()}
            >
                <Grouping
                    autoExpandAll={expanded}
                    texts={config.Grouping.texts}
                    allowCollapsing={config.Grouping.allowCollapsing}
                    contextMenuEnabled={config.Grouping.contextMenuEnabled}
                />
                <Paging 
                    enabled={config.settings.paging}
                    defaultPageSize={config.settings.paging.defaultPageSize}
                    defaultPageIndex={config.settings.paging.defaultPageIndex}
                />
                {/* <Toolbar>
                    <Item
                        name="groupPanel"
                        visible={config.toolbarItems.groupPanel}
                    />
                    <Item
                        visible={config.toolbarItems.fontSizeChangeable.visible}
                    >
                        <TextBox
                            OnKeyUp={OnKeyUp}
                            valueChangeEvent="keyup"
                            value={fontSize ? fontSize.toString() : ''}
                            name={config.toolbarItems.fontSizeChangeable.name}
                            width={config.toolbarItems.fontSizeChangeable.width}
                            style={config.toolbarItems.fontSizeChangeable.style}
                            onValueChanged={
                                (e) => handleFontSize(
                                    parseInt(e.value)
                                )
                            }
                        />
                    </Item>
                    <Item visible={config.toolbarItems.fontChangeable.visible}>
                        <SelectBox
                            value={font}
                            dataSource={config.toolbarItems.fontChangeable.fonts}
                            disabled={config.toolbarItems.fontChangeable.disabled}
                            valueExpr={config.toolbarItems.fontChangeable.valueExpr}
                            displayExpr={config.toolbarItems.fontChangeable.displayExpr}
                            onValueChanged={
                                (e) => {
                                    setFont(e.value)
                                }
                            }
                        />
                    </Item>
                    <Item
                        name="applyFilterButton"
                        visible={visibleApplyFilterButton}
                    />
                    <Item 
                        name="exportButton"
                        visible={config.toolbarItems.exportButton}
                    />
                    <Item 
                        name="columnChooserButton"
                        visible={config.toolbarItems.columnChooserButton}
                    />
                    <Item 
                        name="searchPanel"
                        visible={config.toolbarItems.searchPanel}
                    />
                </Toolbar>
                <FilterRow
                    visible={config.FilterRow.visible}
                    betweenEndText={config.FilterRow.betweenEndText}
                    applyFilterText={config.FilterRow.applyFilterText}
                    betweenStartText={config.FilterRow.betweenStartText}
                    resetOperationText={config.FilterRow.resetOperationText}
                    applyFilter={applyFilterTypeValue}
                >
                    <OperationDescriptions
                        endsWith={config.FilterRow.OperationDescriptions.endsWith}
                        startsWith={config.FilterRow.OperationDescriptions.startsWith}
                    />
                </FilterRow> */}
                {/* <Editing
                    mode={config.Editing.mode}
                    allowAdding={config.Editing.allowAdding}
                    allowUpdating={config.Editing.allowUpdating}
                    allowDeleting={config.Editing.allowDeleting}
                />
                <HeaderFilter
                    visible={config.HeaderFilter.visible}
                    allowSearch={config.HeaderFilter.allowSearch}
                />
                <FilterPanel
                    texts={config.FilterPanel.texts}
                    visible={config.FilterPanel.visible}
                    filterEnabled={config.FilterPanel.filterEnabled}
                />
                <FilterBuilderPopup
                    width={config.FilterBuilderPopup.width}
                    title={config.FilterBuilderPopup.title}
                    position={config.FilterBuilderPopup.position}
                />
                <SearchPanel
                    width={config.SearchPanel.width}
                    visible={config.SearchPanel.visible}
                    placeholder={config.SearchPanel.placeholder}
                    highlightSearchText={config.SearchPanel.highlightSearchText}
                    highlightCaseSensitive={config.SearchPanel.highlightCaseSensitive}
                    searchVisibleColumnsOnly={config.SearchPanel.searchVisibleColumnsOnly}
                />
                <MasterDetail
                    enabled={config.MasterDetail.enabled}
                    component={config.MasterDetail.component}
                />
                <Sorting mode={config.Sorting.mode} />
                <Export
                    texts={config.Export.texts}
                    enabled={config.Export.enabled}
                    allowExportSelectedData={config.Export.allowExportSelectedData}
                />
                <Selection mode={config.Selection.mode} />
                <ColumnFixing enabled={config.ColumnFixing.enabled} />
                <GroupPanel
                    visible={config.GroupPanel.visible}
                    emptyPanelText={config.GroupPanel.emptyPanelText}
                />
                <ColumnChooser
                    mode={config.ColumnChooser.mode}
                    title={config.ColumnChooser.title}
                    enabled={config.ColumnChooser.enabled}
                    emptyPanelText={config.ColumnChooser.emptyPanelText}
                /> */}
                {props.children && props.children}
                {
                    config.templates && config.templates.map((item, index) => {
                        return <Template key={index} name={item.name} render={item.render} />
                    })
                }
            </DataGrid>
        </div>
    );
}
 
export default Grid;