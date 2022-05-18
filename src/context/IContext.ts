import { Dispatch } from "react";
import { Action } from "./IAction";
import { IState } from "./IState";

export interface IContext {
    state: IState;
    dispatch?: Dispatch<Action>;
}   