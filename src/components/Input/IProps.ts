import { InputHTMLAttributes } from "react"

export interface IProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    name: string;
    label: string;
}