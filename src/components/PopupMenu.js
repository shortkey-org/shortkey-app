import { forwardRef, useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

const PopupMenu = forwardRef(({
    position = { top: 0, right: 0 },
    visible = false,
    style = {},
    onClose = (e) => { },
    children
}, ref) => {

    const [v, setV] = useState(false);

    const popupRef = useRef(null);

    useEffect(() => {
        setV(visible);
    }, [visible]);

    useEffect(() => {
        if (!v) {
            onClose(null);
        }
    }, [v]);

    useOnClickOutside(popupRef, (e) => {
        setV(false);
    }, () => { }, v);

    return (
        <>
            {v && <div
                ref={popupRef}
                className="popup-box"
                style={{ ...position, ...style }}>
                <div
                    className="inner-popup">
                    {children}
                </div>
            </div>}
        </>
    );

});

export default PopupMenu;