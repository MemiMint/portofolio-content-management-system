import React, { FC } from "react";
import { IResponse } from "../../types";
import "./styles.css";

export const ResponseMessage: FC<IResponse> = ({ message, status }): JSX.Element => {
    return (
        <div className={status} >
            <p>{message}</p>
        </div>
    )
}