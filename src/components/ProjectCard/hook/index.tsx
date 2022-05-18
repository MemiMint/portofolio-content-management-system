import React, { useState } from "react";

export const useProjectCard = () => {
    const [show, setShow] = useState<boolean>();

    const onClick = () => {
        setShow(!show);
    }

    return {
        show,
        onClick
    }
}