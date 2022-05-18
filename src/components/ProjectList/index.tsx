import React, { FC } from "react";
import { ProjectCard } from "../ProjectCard";
import { useAppContext } from "../../context";
import "./styles.css"
import { ProjectInfo } from "../ProjectInfo";

export const ProjectList: FC = (): JSX.Element => {
    const { state } = useAppContext();

    return (
        <div className="project-list">
            {
                state.projects.map((project, index): JSX.Element => {
                    return (
                        <ProjectCard key={index} id={project._id!} title={project.title} image={project.gallery[0] as string} />
                    );
                })
            }
        </div>
    )
}