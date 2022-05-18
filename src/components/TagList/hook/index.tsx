import React, { useState, useCallback } from "react";
import { IState } from "./IState";

export const useTagList = () => {
    const [state, setState] = useState<IState>({
        show: false
    });

    const toggleShow = useCallback(() => {
        setState({
            show: !state.show
        })
    }, [state.show]);

    return {
        state,
        toggleShow
    }
}