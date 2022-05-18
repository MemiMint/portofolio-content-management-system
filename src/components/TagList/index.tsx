import React, { FC } from "react";
import { Tag } from "../Tag";
import { TagInput } from "../TagInput";
import { useTagList } from "./hook";
import { IProps } from "./IProps";
import "./styles.css"

export const TagList: FC<IProps> = ({ tags, readOnly, addTag }) => {
    const { state, toggleShow } = useTagList();

    const ToggleTagInput = (): JSX.Element => {
        return state.show ? <TagInput addTag={addTag!} Close={toggleShow}  /> : <button onClick={toggleShow}>add new tag</button>
    }

    return (
        <div>
            <h3>Tags</h3>
            <div className="tag-list" >
                {
                    tags.map((tag, index): JSX.Element => {
                        return (
                            <Tag key={index} text={tag} />
                        )
                    })
                }
                {
                    !readOnly && <ToggleTagInput />
                }
            </div>
        </div>
    )
}