import React, { FC } from "react";
import ReactLoading from "react-loading";
import "./styles.css";

export const Loading: FC = (): JSX.Element => {
    return (
        <div className="loading-container" >
            <ReactLoading type="spin" />
        </div>
    )
}