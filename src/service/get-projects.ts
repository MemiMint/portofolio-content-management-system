import { IProject } from "../types/IProject";
import { Server } from "./server"

export const GetProjects = async (): Promise<IProject[]> => {
    const server: Server = new Server();

    const response = await server.GET("/projects");
    const data: IProject[] = await response.json();

    return data;
}
