import { ButtonHTMLAttributes } from "react";

type ColorType = "close" | "update" | "delete";

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export interface IModalButtonProps extends IProps {
    colorType: ColorType;
}