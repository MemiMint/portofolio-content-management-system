import { IResponse } from "../../../types"

export interface IState {
    title: string;
    subtitle: string;
    link: string;
    description: string;
    tags: string[];
    images: File[];
    response: IResponse;
}