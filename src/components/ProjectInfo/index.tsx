import React, { FC } from "react";
import { ProjectHeader } from "../ProjectHeader";
import { TagList } from "../TagList";
import { Gallery } from "../Gallery";
import { Info } from "../Info";
import { useProjectInfo } from "./hook";
import { IProps } from "./IProps";
import "./styles.css";
import { ProjectForm } from "../ProjectForm";

export const ProjectInfo: FC<IProps> = ({ id, onClick }): JSX.Element => {
    const { state, onDelete, onShow } = useProjectInfo(id);

    return (
        <div className="shadow-bg">
            <div className="project-info">
                <ProjectHeader text={state.project.title} onShow={onClick} onUpdate={onShow} onDelete={() => onDelete(id)} />
                <Info header="Subtitle" text={state.project.subtitle} />
                <Info header="Description" text={state.project.description} />
                <TagList tags={state.project.tags} readOnly />
                <Gallery images={state.project.gallery as string[]} readOnly />
            </div>
            { state.show && <ProjectForm id={id} onClose={onShow} /> }
        </div>
    )
}
