import React, { useEffect, useCallback, useRef } from 'react'
import s from './Modal.module.css'


export const Modal = ({ children, visible, setVisible }) => {

    const handleBackdropClick = useCallback((e) => {
        if (e.target === e.currentTarget) {
            setVisible(false);
        }
    }, [setVisible]);

    const handleKeyDown = useCallback((e) => {
        if (e.key === "Escape") {
            setVisible(false);
        }
    }, [setVisible]);

    const bodyRef = useRef(document.body);
    useEffect(() => {
        if (visible) {
            bodyRef.current.style.overflow = "hidden";
            document.addEventListener("keydown", handleKeyDown);
        }
    }, [visible, handleKeyDown]);

    if (!visible) {
        bodyRef.current.style.overflow = "";
        document.removeEventListener("keydown", handleKeyDown)
        return null;
    }

    return (
        <>
            {!!visible && (
                <div className={s.modal} onClick={handleBackdropClick}>
                    <div className={s.modalContent}>
                        <button className={s.closeBtn} onClick={() => setVisible(false)}>
                            Close</button>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};










/* <div className={s.modalContent} onClick={(e) => e.stopPropagation()}> */
