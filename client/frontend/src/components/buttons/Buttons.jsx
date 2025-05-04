import React from 'react'
import "./buttons.css";


export function ButtonSolid(props) {
    return (
        <>
            <div className="button button-solid">
                <button type={props.type}>{props.value}</button>
            </div>
        </>
    )
}

export function ButtonOutline(props) {
    return (<>
        <div className="button button-outline">
            <button type={props.type}>{props.value}</button>
        </div>
    </>)
}