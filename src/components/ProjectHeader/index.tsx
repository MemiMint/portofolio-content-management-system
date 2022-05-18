import React, { FC } from "react";
import { ModalButton } from "../Button"
import { IProps } from "./IProps";
import "./styles.css";

export const ProjectHeader: FC<IProps> = ({ text, onShow, onDelete, onUpdate }): JSX.Element => {
    const buttons: Array<{
        text: string;
        color: "close" | "update" | "delete";
        onClick?: () => void;
    }> = [
        {
            text: "Close",
            color: "close",
            onClick: onShow
        },
        {
            text: "Update",
            color: "update",
            onClick: onUpdate
        },
        {
            text: "Delete",
            color: "delete",
            onClick: onDelete
        }
    ];

    return (
        <div className="project-header" >
            <h3>{text}</h3>
            <div className="btn-container">
                {
                    buttons.map((button): JSX.Element => {
                        return (
                            <ModalButton text={button.text} colorType={button.color} onClick={button.onClick} />
                        )
                    })
                }
            </div>
        </div>
    )
}