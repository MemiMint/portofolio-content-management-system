import { IProject } from "../types/IProject";
import { Server } from "./server";

export const CreateProject = async (data: IProject): Promise<IProject> => {
    const server: Server = new Server();
    const formData: FormData = new FormData();

    formData.append("title", data.title);
    formData.append("subtitle", data.subtitle);
    formData.append("link", data.link);
    formData.append("description", data.description);

    data.tags.map((tag) => {
        formData.append("tags", tag);
    });

    data.gallery.map((image) => {
        formData.append("gallery", image);
    })

    const response = await server.POST("/project", formData);
    const project = await response.json();

    return project;
}
