import React, { FC } from "react";
import { IProps } from "./IProps";
import "./styles.css";

export const Info: FC<IProps> = ({ header, text }): JSX.Element => {
    return (
        <div className="info" >
            <h2>{header}</h2>
            <h4>{text}</h4>
        </div>
    )
}