import React, { useState, useCallback } from "react";
import { IState } from "./IState";

export const useTagInput = () => {
    const [state, setState] = useState<IState>({
        tag: ""
    });

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target ;

        setState({
            ...state,
            [name]: value
        });
    }, [state.tag])

    return {
        state,
        onChange
    }
}