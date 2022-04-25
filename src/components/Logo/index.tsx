import React, { FC } from "react";
import logo from "../../logo.svg";
import "./styles.css"

export const Logo: FC<any> = (): JSX.Element => {
    return (
        <div className="logo" >
            <img src={logo} width={80} height={80} />
            <h3>Portfolio Content Management System</h3>
        </div>
    )
}