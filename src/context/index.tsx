import React, {  
    useState,
    useEffect,
    useReducer,
    createContext,
    FunctionComponent,
    useContext
} from "react";
import { ProjectService } from "../service";
import { AppReducer } from "./reducer";
import { IContext } from "./IContext";
import { IState } from "./IState"


const initialState: IState = {
    projects: [],
    isLoading: false
};

const AppContext = createContext<IContext>({
    state: initialState
});

export const AppProvider: FunctionComponent<{ children: React.ReactChild }> = ({ children }): JSX.Element => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const service: ProjectService = new ProjectService();

    const fetchProjects = async (): Promise<void> => {
        await service.GetProjects().then((projects) => {
            dispatch({ type: "GET_PROJECTS", payload: projects });
        })
    }

    useEffect(() => {
        dispatch({ type: "REQUEST" });
        fetchProjects();
    }, []);

    return (
        <AppContext.Provider value={{
            state,
            dispatch
        }}>
            { children }
        </AppContext.Provider>
    )
}

export const useAppContext = (): IContext => {
    return useContext(AppContext) as IContext;
}