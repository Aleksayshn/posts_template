import { useEffect, useRef } from 'react'
import { createPortal } from "react-dom";

export const ModalRoot = ({ children }) => {
    const modalRoot = useRef(document.createElement("div"));
    useEffect(() => {
        document.body.appendChild(modalRoot.current);
        const node = modalRoot.current;
        return () => {
            document.body.removeChild(node);
        };
    }, []);

    return createPortal(children, modalRoot.current);
};
