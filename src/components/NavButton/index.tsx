import React, { FC } from "react";
import { IProps } from "./IProps";
import "./styles.css"

export const NavButton: FC<IProps> = ({ text, onClick }): JSX.Element => {
    return (
        <button className="nav-button" onClick={onClick} >
            { text }
        </button>
    )
}