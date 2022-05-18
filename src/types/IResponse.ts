type Status = "sucess" | "error"

export interface IResponse {
    message: string;
    status: Status;
}