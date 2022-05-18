import React, { FC } from "react";
import { IProps } from "./IProps";
import "./styles.css";

export const Tag: FC<IProps> = ({ text }): JSX.Element => {
    return (
        <div className="tag">
            <p>{text}</p>
        </div>
    )
}