import React, { FC } from "react";
import { Logo } from "../Logo"
import { NavButton } from "../NavButton";
import { IProps } from "./IProps"
import "./styles.css"

export const Navbar: FC<IProps> = (): JSX.Element => {
    return (
        <nav className="navbar" >
            <Logo />
            <NavButton text="Add New Project" onClick={() => window.confirm("bla")} />
        </nav>
    );
}