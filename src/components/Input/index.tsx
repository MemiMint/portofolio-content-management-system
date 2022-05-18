import React, { FC } from "react";
import { IProps } from "./IProps";
import "./styles.css"

export const Input: FC<IProps> = ({ name, label, onChange, value }): JSX.Element => {
    return (
        <div className="container" style={{ marginTop: 10 }} >
            <label className="label" htmlFor={name} >{label}</label>
            <input className="input" type="text" name={name} onChange={onChange} value={value} />
        </div>
    )
}

export const TextArea: FC<IProps> = ({ name, label, onChange, value }): JSX.Element => {
    return (
        <div className="container" style={{ marginTop: 20 }} >
            <label className="label" htmlFor={name}>{label}</label>
            <textarea className="textarea" name={name} value={value} onChange={onChange} />
        </div>
    )
}