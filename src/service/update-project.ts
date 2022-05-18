import { IProject } from "../types/IProject";
import { Server } from "./server";

export const UpdateProject = async (id: string, data: IProject): Promise<IProject> => {
    const server: Server = new Server();
    
    const response = await server.PUT(`/project/${id}`, data);
    const project = await response.json();

    return project;
}