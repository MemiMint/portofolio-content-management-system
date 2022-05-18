import { IProject } from "../types/IProject"
import { IServer } from "../types/IServer"

const URL = "http://localhost:4000";

export class Server implements IServer {

    public GET = async (endpoint: string): Promise<Response> =>  {
        const response = await fetch(URL + endpoint, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        });

        return response;
    }

    public POST = async (endpoint: string, body: FormData): Promise<Response> => {
        const response = await fetch(URL + endpoint, {
            method: "POST",
            body
        });

        return response;
    }

    public PUT = async (endpoint: string, body: IProject): Promise<Response> => {
        const response = await fetch(URL + endpoint, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        return response;
    }

    public DELETE = async(endpoint: string): Promise<Response> => {
        const response = await fetch(URL + endpoint, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            }
        });

        return response;
    }
}