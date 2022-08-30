import React from 'react';
 
import 'devextreme/dist/css/dx.light.css';
 
import {ListConfig} from './config';

import List from 'devextreme-react/list';


class ListComponent extends React.Component {

    constructor(props) {
        super(props);

        if (props.config) {
            this.config = props.config
        } else {
            this.config = ListConfig
        }
    }


    render() {
        return(
            <List
                id={this.config.settings.id}
                hint={this.config.settings.hint}
                width={this.config.settings.width}
                height={this.config.settings.height}
                visible={this.config.settings.visible}
                grouped={this.config.settings.grouped}
                keyExpr={this.config.settings.keyExpr}
                disabled={this.config.settings.disabled}
                tabIndex={this.config.settings.tabIndex}
                menuMode={this.config.settings.menuMode}
                menuItems={this.config.settings.menuItems}
                className={this.config.settings.className}
                dataSource={this.config.settings.dataSource}
                noDataText={this.config.settings.noDataText}
                searchMode={this.config.settings.searchMode}
                searchExpr={this.config.settings.searchExpr}
                rtlEnabled={this.config.settings.rtlEnabled}
                displayExpr={this.config.settings.displayExpr}
                elementAttr={this.config.settings.elementAttr}
                pageLoadMode={this.config.settings.pageLoadMode}
                onScroll={this.config.settings.methods.onScroll}
                selectionMode={this.config.settings.selectionMode}
                showScrollbar={this.config.settings.showScrollbar}
                searchTimeout={this.config.settings.searchTimeout}
                searchEnabled={this.config.settings.searchEnabled}
                scrollByThumb={this.config.settings.scrollByThumb}
                bounceEnabled={this.config.settings.bounceEnabled}
                selectAllText={this.config.settings.selectAllText}
                selectAllMode={this.config.settings.selectAllMode}
                onItemHold={this.config.settings.methods.onItemHold}
                itemDeleteMode={this.config.settings.itemDeleteMode}
                refreshingText={this.config.settings.refreshingText}
                pulledDownText={this.config.settings.pulledDownText}
                nextButtonText={this.config.settings.nextButtonText}
                pageLoadingText={this.config.settings.pageLoadingText}
                pullingDownText={this.config.settings.pullingDownText}
                indicateLoading={this.config.settings.indicateLoading}
                scrollByContent={this.config.settings.scrollByContent}
                itemHoldTimeout={this.config.settings.itemHoldTimeout}
                onDisposing={this.config.settings.methods.onDisposing}
                onItemClick={this.config.settings.methods.onItemClick}
                onItemSwipe={this.config.settings.methods.onItemSwipe}
                scrollingEnabled={this.config.settings.scrollingEnabled}
                hoverStateEnabled={this.config.settings.hoverStateEnabled}
                focusStateEnabled={this.config.settings.focusStateEnabled}
                allowItemDeleting={this.config.settings.allowItemDeleting}
                collapsibleGroups={this.config.settings.collapsibleGroups}
                onInitialized={this.config.settings.methods.onInitialized}
                onItemDeleted={this.config.settings.methods.onItemDeleted}
                onPageLoading={this.config.settings.methods.onPageLoading}
                onPullRefresh={this.config.settings.methods.onPullRefresh}
                onContentReady={this.config.settings.methods.onContentReady}
                onItemDeleting={this.config.settings.methods.onItemDeleting}
                onItemRendered={this.config.settings.methods.onItemRendered}
                useNativeScrolling={this.config.settings.useNativeScrolling}
                activeStateEnabled={this.config.settings.activeStateEnabled}
                pullRefreshEnabled={this.config.settings.pullRefreshEnabled}
                repaintChangesOnly={this.config.settings.repaintChangesOnly}
                onGroupRendered={this.config.settings.methods.onGroupRendered}
                onItemReordered={this.config.settings.methods.onItemReordered}
                onOptionChanged={this.config.settings.methods.onOptionChanged}
                showSelectionControls={this.config.settings.showSelectionControls}
                onItemContextMenu={this.config.settings.methods.onItemContextMenu}
                onSelectionChanged={this.config.settings.methods.onSelectionChanged}
                onSelectAllValueChanged={this.config.settings.methods.onSelectAllValueChanged}
            >
            </List>
        );
    }
}

export default ListComponent;