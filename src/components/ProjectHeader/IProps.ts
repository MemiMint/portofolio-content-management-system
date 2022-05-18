export interface IProps {
    text: string;
    onShow?: () => void;
    onDelete?: () => void;
    onUpdate?: () => void;
}