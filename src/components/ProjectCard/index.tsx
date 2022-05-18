import React, { FC } from "react";
import { ProjectInfo } from "../ProjectInfo";
import { useProjectCard } from "./hook";
import { IProps } from "./IProps";
import "./styles.css"

export const ProjectCard: FC<IProps> = ({ id, title, image }): JSX.Element => {
    const { show, onClick } = useProjectCard();

    return (
        <>
            { show && <ProjectInfo id={id} onClick={onClick} /> }
            <div className="project-card" onClick={onClick} >
                <div className="absolute-title" >
                    <h4>{title}</h4>
                </div>
                <img src={`http://localhost:4000/uploads/${image}`} />
            </div>
        </>
    )
}
