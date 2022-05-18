import React, { FC } from "react";
import { Logo } from "../Logo"
import { NavButton } from "../Button"
import { IProps } from "./IProps"
import "./styles.css"

export const Navbar: FC<IProps> = ({ onClick }): JSX.Element => {
    return (
        <nav className="navbar" >
            <Logo />
            <NavButton text="Add New Project" onClick={onClick} />
        </nav>
    );
}