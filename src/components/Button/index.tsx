import React, { FC } from "react";
import { IProps, IModalButtonProps } from "./IProps";
import "./styles.css"

export const PrimaryButton: FC<IProps> = ({ text, onClick }): JSX.Element => {
    return (
        <button className="button primary-button" onClick={onClick} >
            { text }
        </button>
    )
}

export const NavButton: FC<IProps> = ({ text, onClick }): JSX.Element => {
    return (
        <button className="button nav-button" onClick={onClick} >
            { text }
        </button>
    )
};

export const ModalButton: FC<IModalButtonProps> = ({ text, colorType, onClick}): JSX.Element => {
    return (
        <button className={`${colorType}-btn`} onClick={onClick} >
            { text }
        </button>
    )
}