import React from 'react';
 
import 'devextreme/dist/css/dx.light.css';
 
import {PopupConfig} from './config';

import { Popup } from 'devextreme-react/popup';


class PopupComponent extends React.Component {

    constructor(props) {
        super(props);

        if (props.config) {
            this.config = props.config
        } else {
            this.config = PopupConfig
        }

        this.state = {
            visible: props.visible
        }

        if (props.onHiding) {
            this.onHiding = props.onHiding.bind(this);
        } else {
            this.onHiding = this.config.settings.methods.onHiding.bind(this);
        }

        if (props.onShowing) {
            this.onShowing = props.onShowing.bind(this);
        } else {
            this.onShowing = this.config.settings.methods.onShowing.bind(this);
        }

    }


    render() {
        return(
            <Popup
                onHiding={this.onHiding}
                visible={this.state.visible}
                id={this.config.settings.id}
                hint={this.config.settings.hint}
                width={this.config.settings.width}
                title={this.config.settings.title}
                height={this.config.settings.height}
                shading={this.config.settings.shading}
                toolbarItems={this.config.toolbarItems}
                disabled={this.config.settings.disabled}
                tabIndex={this.config.settings.tabIndex}
                maxWidth={this.config.settings.maxWidth}
                minWidth={this.config.settings.minWidth}
                position={this.config.settings.position}
                showTitle={this.config.settings.showTitle}
                maxHeight={this.config.settings.maxHeight}
                minHeight={this.config.settings.minHeight}
                className={this.config.settings.className}
                container={this.config.settings.container}
                animation={this.config.settings.animation}
                rtlEnabled={this.config.settings.rtlEnabled}
                fullScreen={this.config.settings.fullScreen}
                dragEnabled={this.config.settings.dragEnabled}
                titleRender={this.config.settings.titleRender}
                elementAttr={this.config.settings.elementAttr}
                wrapperAttr={this.config.settings.wrapperAttr} 
                onShown={this.config.settings.methods.onShown}
                shadingColor={this.config.settings.shadingColor}
                onHidden={this.config.settings.methods.onHidden}
                onResize={this.config.settings.methods.onResize}
                onShowing={this.config.settings.methods.onShowing}
                contentRender={this.config.settings.contentRender}
                titleTemplate={this.config.settings.titleTemplate}
                resizeEnabled={this.config.settings.resizeEnabled}
                deferRendering={this.config.settings.deferRendering}
                titleComponent={this.config.settings.titleComponent}
                showCloseButton={this.config.settings.showCloseButton}
                onDisposing={this.config.settings.methods.onDisposing}
                onResizeEnd={this.config.settings.methods.onResizeEnd}
                restorePosition={this.config.settings.restorePosition}
                contentTemplate={this.config.settings.contentTemplate}
                contentComponent={this.config.settings.contentComponent}
                onResizeStart={this.config.settings.methods.onResizeStart}
                onInitialized={this.config.settings.methods.onInitialized}
                hoverStateEnabled={this.config.settings.hoverStateEnabled}
                focusStateEnabled={this.config.settings.focusStateEnabled}
                dragAndResizeArea={this.config.settings.dragAndResizeArea}
                hideOnParentScroll={this.config.settings.hideOnParentScroll}
                onContentReady={this.config.settings.methods.onContentReady}
                closeOnOutsideClick={this.config.settings.closeOnOutsideClick}
                dragOutsideBoundary={this.config.settings.dragOutsideBoundary}
                onOptionChanged={this.config.settings.methods.onOptionChanged}
                onTitleRendered={this.config.settings.methods.onTitleRendered}                           
            >
            </Popup>
        );
    }
}

export default PopupComponent;