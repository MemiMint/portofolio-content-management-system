import { IProject } from "./IProject";

export interface IProjectService {
    GetProjects: () => Promise<IProject[]>;
    GetProject: (id: string) => Promise<IProject>;
    CreateProject: (data: IProject) => Promise<IProject>;
    UpdateProject: (id: string, data: IProject) => Promise<IProject>;
    DeleteProject: (id: string) => Promise<IProject>;
}