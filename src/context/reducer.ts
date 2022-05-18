import { IState } from "./IState";
import { Action } from "./IAction";

export const AppReducer = (state: IState, action: Action): IState => {
    switch (action.type) {
        case "GET_PROJECTS":
            return {
                ...state,
                projects: action.payload,
                isLoading: false
            }
        case "GET_PROJECT":
            return {
                ...state,
                projects: [...state.projects, action.payload],
                isLoading: false
            }
        case "DELETE_PROJECT":
            return {
                ...state,
                projects: state.projects.filter((project) => project._id !== action.payload._id),
                isLoading: false
            }
        case "REQUEST": 
            return {
                ...state,
                isLoading: !state.isLoading
            }
    }
}