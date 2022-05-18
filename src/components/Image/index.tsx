import React, { FC } from "react";
import { IProps } from "./IProps";
import "./styles.css"

export const Image: FC<IProps> = ({ src }): JSX.Element => {
    return (
        <div className="image">
            <img src={src} />
        </div>
    )
}