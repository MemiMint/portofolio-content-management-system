export interface IProps {
    tags: string[];
    readOnly: boolean;
    addTag?: (tag: string) => void;
}