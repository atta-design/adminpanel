import React from 'react'
import SVG from 'react-inlinesvg'

export const KTSVG = ({className = '', path, svgClassName = 'mh-50px'}) => {
    return (
        <span className={`svg-icon ${className}`}>
            <SVG src={path} className={svgClassName} />
        </span>
    )
}
