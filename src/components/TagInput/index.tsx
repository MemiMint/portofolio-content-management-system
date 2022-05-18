import React, { FC } from "react";
import { useTagInput } from "./hook"
import { IProps } from "./IProps"
import "./styles.css"

export const TagInput: FC<IProps> = ({ addTag, Close }): JSX.Element => {
    const { state, onChange } = useTagInput();

    return (
        <div className="tag-input" >
            <input type="text" name="tag" value={state.tag} onChange={onChange} />
            <button onClick={() => addTag(state.tag)}>add tag</button>
            <button onClick={Close} >close</button>
        </div>
    )
}