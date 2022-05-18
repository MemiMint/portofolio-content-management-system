export interface IProps {
    images: File[] | string[];
    readOnly?: boolean;
    addImage?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}