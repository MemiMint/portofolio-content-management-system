import React, { useState, useEffect } from "react";
import { useAppContext } from "../../../context"
import { ProjectService } from "../../../service";
import { IState } from "./IState"

export const useProjectInfo = (id: string) => {
    const { dispatch } = useAppContext();

    const service: ProjectService = new ProjectService();
    
    const [state, setState] = useState<IState>({
        project: {
            title: "",
            subtitle: "",
            description: "",
            link: "",
            gallery: [],
            tags: []
        },
        show: false
    });

    const onShow = () => {
        setState({
            ...state,
            show: !state.show
        });
    }

    const fetchProject = async (): Promise<void> => {
        const project = await service.GetProject(id);

        setState({
            ...state,
            project
        });
    }

    const onDelete = async (id: string) => {
        await service.DeleteProject(id).then((project) => {
            dispatch!({ type: "DELETE_PROJECT", payload: project });
        })
    }

    useEffect(() => {
        fetchProject();
    }, []);

    return {
        state,
        onShow,
        onDelete
    }
}