import React from 'react';

import {TabPanelConfig} from './config';

import 'devextreme/dist/css/dx.light.css';
 
import TabPanel from 'devextreme-react/tab-panel';


class TabPanelComponent extends React.Component {

    constructor(props) {
        super(props);

        this.children = props.children

        if (props.config) {
            this.config = props.config
        } else {
            this.config = TabPanelConfig
        }

        if (props.onOptionChanged) {
            this.onOptionChanged = props.onOptionChanged
        } else {
            this.onOptionChanged = this.config.settings.methods.onOptionChanged
        }

        if (props.onSelectionChanged) {
            this.onSelectionChanged = props.onSelectionChanged
        } else {
            this.onSelectionChanged = this.config.settings.methods.onSelectionChanged
        }

        if (props.selectedIndex) {
            this.selectedIndex = props.selectedIndex
        } else {
            this.selectedIndex = this.config.settings.selectedIndex
        }

        if (props.selectedItem) {
            this.selectedItem = props.selectedItem
        } else {
            this.selectedItem = this.config.settings.selectedItem
        }

        if (props.dataSource) {
            this.dataSource = props.dataSource
        } else {
            this.dataSource = this.config.settings.dataSource
        }

        if (props.itemTitleRender) {
            this.itemTitleRender = props.itemTitleRender
        } else {
            this.itemTitleRender = this.config.settings.itemTitleRender
        }

        if (props.loop) {
            this.loop = props.loop
        } else {
            this.loop = this.config.settings.loop
        }

        if (props.animationEnabled) {
            this.animationEnabled = props.animationEnabled
        } else {
            this.animationEnabled = this.config.settings.animationEnabled
        }

        if (props.onInitialized) {
            this.onInitialized = props.onInitialized
        } else {
            this.onInitialized = this.config.settings.methods.onInitialized
        }

        if (props.swipeEnabled) {
            this.swipeEnabled = props.swipeEnabled
        } else {
            this.swipeEnabled = this.config.settings.swipeEnabled
        }
    }


    render() {
        return (
            <TabPanel
                loop={this.loop}
                id={this.config.settings.id}
                dataSource={this.dataSource}
                swipeEnabled={this.swipeEnabled}
                hint={this.config.settings.hint}
                selectedItem={this.selectedItem}
                selectedIndex={this.selectedIndex}
                width={this.config.settings.width}
                height={this.config.settings.height}
                visible={this.config.settings.visible}
                onOptionChanged={this.onOptionChanged}
                itemTitleRender={this.itemTitleRender}
                animationEnabled={this.animationEnabled}
                disabled={this.config.settings.disabled}
                tabIndex={this.config.settings.tabIndex}
                onSelectionChanged={this.onSelectionChanged}
                noDataText={this.config.settings.noDataText}
                itemRender={this.config.settings.itemRender}
                rtlEnabled={this.config.settings.rtlEnabled}
                elementAttr={this.config.settings.elementAttr}
                itemTemplate={this.config.settings.itemTemplate}
                itemComponent={this.config.settings.itemComponent}
                onItemHold={this.config.settings.methods.onItemHold}
                deferRendering={this.config.settings.deferRendering}
                showNavButtons={this.config.settings.showNavButtons}
                onTitleHold={this.config.settings.methods.onTitleHold}
                onDisposing={this.config.settings.methods.onDisposing}
                onItemClick={this.config.settings.methods.onItemClick}
                itemHoldTimeout={this.config.settings.itemHoldTimeout}
                scrollingEnabled={this.config.settings.scrollingEnabled}
                onTitleClick={this.config.settings.methods.onTitleClick}
                onInitialized={this.onInitialized}
                itemTitleTemplate={this.config.settings.itemTitleTemplate}
                hoverStateEnabled={this.config.settings.hoverStateEnabled}
                focusStateEnabled={this.config.settings.focusStateEnabled}
                itemTitleComponent={this.config.settings.itemTitleComponent}
                activeStateEnabled={this.config.settings.activeStateEnabled}
                repaintChangesOnly={this.config.settings.repaintChangesOnly}
                onContentReady={this.config.settings.methods.onContentReady}
                onItemRendered={this.config.settings.methods.onItemRendered}
                onTitleRendered={this.config.settings.methods.onTitleRendered}
                onItemContextMenu={this.config.settings.methods.onItemContextMenu}
            >
            </TabPanel>
        );
    }
}
 
export default TabPanelComponent;