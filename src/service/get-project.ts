import { IProject } from "../types/IProject";
import { Server } from "./server";

export const GetProject = async (id: string): Promise<IProject> => {
    const server: Server = new Server();

    const response = await server.GET(`/project/${id}`);
    const project: IProject = await response.json();

    return project;
}