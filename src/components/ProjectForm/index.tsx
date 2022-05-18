import React, { FC } from "react";
import { ProjectHeader } from "../ProjectHeader";
import { TagList } from "../TagList"
import { Input, TextArea } from "../Input";
import { Gallery } from "../Gallery";
import { PrimaryButton } from "../Button"
import { useProjectForm } from "./hook";
import { IProps } from "./IProps";
import "./styles.css"

export const ProjectForm: FC<IProps> = ({ id, onClose }): JSX.Element => {
    const { state, addTag, addImage, onChange, onClick } = useProjectForm(id);

    return (
        <div className="shadow-bg">
            <div className="project-form">
                <ProjectHeader text="Proyecto de prueba" onShow={onClose} />
                <Input label="title" name="title" value={state.title} onChange={onChange} />
                <Input label="subtitle" name="subtitle" value={state.subtitle} onChange={onChange} />
                <Input label="link" name="link" value={state.link} onChange={onChange} />
                <TagList readOnly={false} addTag={addTag} tags={state.tags} />
                <TextArea label="Description" name="description" value={state.description} onChange={onChange} />
                { !id && <Gallery addImage={addImage} images={state.images} /> }
                <PrimaryButton text="Create Project" onClick={onClick} />
            </div>
        </div>
    )
}

