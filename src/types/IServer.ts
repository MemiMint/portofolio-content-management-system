import { IProject } from "./IProject"

export interface IServer {
    GET: (endpoint: string) => Promise<Response>
    POST: (endpoint: string, body: FormData) => Promise<Response>;
    PUT: (endpoint: string, body: any) => Promise<Response>;
    DELETE: (endpoint: string) => Promise<Response>;
}