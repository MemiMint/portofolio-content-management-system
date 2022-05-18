import React, { useState } from "react";

export const useApp = () => {
    const [isClose, setIsClose] = useState<boolean>(true);
    
    const onClick = (): void => {
        setIsClose(!isClose);
    }

    return {
        isClose,
        onClick
    }
}