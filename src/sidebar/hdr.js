import { useUI } from "../contexts/UICtx";
import CloseIcon from "../icons/Close";

export default function SidebarHeader() {

    const uiCtx = useUI();

    const handleClose = (e) => {
        uiCtx.setSidemenuVisibility(false);
    }

    return (
        <div
            className="ct page-header sidebar-header">
            <div
                className="inner-ct -wrp-95 ct-flex">

                <div className="ct-section --auto-w --align-left dummy"></div>
                    
                <div
                    className="ct-section --auto-w --align-right">

                    <button
                        onClick={handleClose}
                        className="btnIco">
                        <span>
                            <CloseIcon />
                        </span>
                    </button>

                </div>

            </div>
        </div>
    );

}