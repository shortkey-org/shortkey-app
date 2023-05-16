import { useAuth } from "../contexts/AuthCtx";
import { useUI } from "../contexts/UICtx";
import MenuIcon from "../icons/Menu";
import SettingIcon from "../icons/Setting";
import { SidemenuTabs } from "../sidebar";

export default function Header() {

    const uiCtx = useUI();
    const authCtx = useAuth();

    const handleMenuClick = (e) => {
        uiCtx.setSidemenuTab(SidemenuTabs.Shortkeys);
        uiCtx.setSidemenuVisibility(true);
    }

    const handleSettingClick = (e) => {
        uiCtx.setSidemenuTab(SidemenuTabs.Settings);
        uiCtx.setSidemenuVisibility(true);
    }

    return (
        <>

            <div className="hdr">

                <div
                    className="cH100p cFlex row jsb acenter">

                    {!authCtx.setting.hideProductHunt && <div
                        className="__product_hunt cH100p cFlex row jstart acenter">

                        <svg
                            width={268}
                            height={76}
                            viewBox="0 0 268 76"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <rect
                                x={11.5}
                                y={10.5}
                                width={249}
                                height={53}
                                rx={3.5}
                                fill="white"
                                stroke="#F3F3F3"
                            />
                            <rect y={-3} width={268} height={79} fill="url(#pattern0)" />
                            <defs>
                                <pattern
                                    id="pattern0"
                                    patternContentUnits="objectBoundingBox"
                                    width={1}
                                    height={1}
                                >
                                    <use
                                        xlinkHref="#image0_1067_1016"
                                        transform="scale(0.00373134 0.0126582)"
                                    />
                                </pattern>
                                <image
                                    id="image0_1067_1016"
                                    width={268}
                                    height={79}
                                    xlinkHref="data:image/png;base64,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"
                                />
                            </defs>
                        </svg>

                    </div>}

                    <div className="dummy"></div>

                    <div
                        className="buttons cH100p cFlex row jend acenter">

                        <button
                            onClick={handleSettingClick}
                            className="btnIco">
                            <span>
                                <SettingIcon />
                            </span>
                        </button>

                        <span className="seprator"></span>

                        <button
                            onClick={handleMenuClick}
                            className="btnIco">
                            <span>
                                <MenuIcon />
                            </span>
                        </button>

                    </div>

                </div>

            </div>

        </>
    );

}