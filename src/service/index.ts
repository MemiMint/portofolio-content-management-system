import { CreateProject } from "./create-project";
import { UpdateProject } from "./update-project";
import { DeleteProject } from "./delete-project";
import { GetProject } from "./get-project";
import { GetProjects } from "./get-projects";
import { IProject, IProjectService } from "../types"

export class ProjectService implements IProjectService {
    public GetProjects = async (): Promise<IProject[]> => {
        return GetProjects();
    }

    public GetProject = async (id: string): Promise<IProject> => {
        return await GetProject(id);
    }


    public CreateProject = async (data: IProject): Promise<IProject> => {
        return await CreateProject(data);
    }

    public UpdateProject = async (id: string, data: IProject): Promise<IProject> => {
        return await UpdateProject(id, data);
    }

    public DeleteProject = async (id: string): Promise<IProject> => {
        return await DeleteProject(id);
    }
}