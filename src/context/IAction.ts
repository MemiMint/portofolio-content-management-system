import { IProject } from "../types"

export type Action = 
| { type: "GET_PROJECTS", payload: IProject[] }
| { type: "GET_PROJECT", payload: IProject } 
| { type: "DELETE_PROJECT", payload: IProject }
| { type: "REQUEST" }  


