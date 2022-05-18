import { IProject } from "../types";

export interface IState {
    projects: IProject[];
    isLoading: boolean;
}