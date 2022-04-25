import React, { FC } from "react";
import { IProps } from "./IProps";
import "./styles.css"

export const ProjectCard: FC<IProps> = ({ title, image }): JSX.Element => {
    return (
        <div className="project-card">
            <div style={{ paddingTop: 4, borderBottom: "2px solid black", textAlign: "center"}} >
                <h4>{title}</h4>
            </div>
            <div style={{ width: "100%", height: "auto"}} >
                <img src={image} width="100%" height="100%" style={{objectFit: "cover"}} />
            </div>
        </div>
    )
}
