import { IProject } from "../types";
import { Server } from "./server";

export const DeleteProject = async (id: string): Promise<IProject> => {
    const server: Server = new Server();

    const response = await server.DELETE(`/project/${id}`);
    const project = await response.json();

    return project;
}