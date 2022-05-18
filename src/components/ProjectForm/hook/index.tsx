import React, { useState, useEffect, useCallback } from "react";
import { ProjectService } from "../../../service";
import { useAppContext } from "../../../context";
import { IState } from "./IState"

export const useProjectForm = (id?: string) => {
    const service: ProjectService = new ProjectService();
    const { dispatch } = useAppContext();

    const [state, setState] = useState<IState>({
        title: "",
        subtitle: "",
        description: "",
        link: "",
        images: [],
        tags: [],
        response: {
            message: "",
            status: "error"
        }
    });

    const fetchProject = async (): Promise<void> => {
        if (id) {
            const project = await service.GetProject(id);

            setState({
                ...state,
                title: project.title,
                subtitle: project.subtitle,
                description: project.description,
                link: project.link,
                images: [],
                tags: project.tags,
            });
        }
    }

    const addTag = (tag: string): void => {
        setState({
            ...state,
            tags: [...state.tags, tag]
        });
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        });
    }

    const addImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files !== null) {
            setState({
                ...state,
                images: [...state.images, event.target.files[0]]
            })
        }
    }

    const onUpdate = async (): Promise<void> => {
        await service.UpdateProject(id!, {
            title: state.title,
            subtitle: state.subtitle,
            description: state.description,
            link: state.link,
            tags: state.tags,
            gallery: state.images      
        });
    }

    const onCreate = async (): Promise<void> => {
        await service.CreateProject({
            title: state.title,
            subtitle: state.subtitle,
            description: state.description,
            link: state.link,
            tags: state.tags,
            gallery: state.images
        }).then((project) => {
            dispatch!({ type: "GET_PROJECT", payload: project });
        });        
    }

    const onClick = async (): Promise<void> => {
        if (id) {
            onUpdate();
            return;
        }

        onCreate();
    }

    useEffect(() => {
        fetchProject();
    }, [])

    return {
        state,
        onChange,
        onClick,
        addTag,
        addImage
    }
}