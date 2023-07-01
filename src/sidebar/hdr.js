import { SidemenuTabs } from ".";
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

                <div className="ct-section --auto-w --align-left dummy">

                    <div className="floating-menu-switcher">
                        <button onClick={(e) => uiCtx.setSidemenuTab(SidemenuTabs.Settings)} className={(uiCtx.sidemenu_tab === SidemenuTabs.Settings ? "active" : "")}>
                            <svg
                                width={17}
                                height={17}
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <mask
                                    id="mask0_1314_1446"
                                    style={{
                                        maskType: "alpha",
                                    }}
                                    maskUnits="userSpaceOnUse"
                                    x={0}
                                    y={0}
                                    width={17}
                                    height={17}
                                >
                                    <rect width={17} height={17} fill="#616161" />
                                </mask>
                                <g mask="url(#mask0_1314_1446)">
                                    <path
                                        d="M9.20833 6.375V4.95833H11.3333V2.125H12.75V4.95833H14.875V6.375H9.20833ZM11.3333 14.875V7.79167H12.75V14.875H11.3333ZM4.25 14.875V12.0417H2.125V10.625H7.79167V12.0417H5.66667V14.875H4.25ZM4.25 9.20833V2.125H5.66667V9.20833H4.25Z"
                                        fill="#616161"
                                    />
                                </g>
                            </svg>
                        </button>
                        <button onClick={(e) => uiCtx.setSidemenuTab(SidemenuTabs.Shortkeys)} className={(uiCtx.sidemenu_tab === SidemenuTabs.Shortkeys ? "active" : "")}>
                            <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <mask
                                    id="mask0_1314_1449"
                                    style={{
                                        maskType: "alpha",
                                    }}
                                    maskUnits="userSpaceOnUse"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                >
                                    <rect width={20} height={20} fill="#616161" />
                                </mask>
                                <g mask="url(#mask0_1314_1449)">
                                    <path
                                        d="M2.5 15V13.3333H17.5V15H2.5ZM2.5 10.8333V9.16667H17.5V10.8333H2.5ZM2.5 6.66667V5H17.5V6.66667H2.5Z"
                                        fill="#616161"
                                    />
                                </g>
                            </svg>
                        </button>
                    </div>

                </div>

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