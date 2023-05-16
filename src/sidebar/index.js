import { useRef } from "react";
import { useUI } from "../contexts/UICtx";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import useOnEscape from "../hooks/useOnEscape";
import SettingsTab from "./settings";
import ShortkeysTab from "./shortkeys";

export const SidemenuTabs = {
    Shortkeys: "df",
    Settings: "Dd"
}

export default function Sidebar()
{

    const uiCtx = useUI();
    const refSidebar = useRef(null);

    useOnClickOutside(refSidebar, ((e) => {
        uiCtx.setSidemenuVisibility(false);
    }), () => {}, uiCtx.sidemenu_active && uiCtx.sidemenu_fallback_active);

    useOnEscape((e) => {
        uiCtx.setSidemenuVisibility(false);
    }, uiCtx.sidemenu_active && uiCtx.sidemenu_fallback_active);

    return (
        <div
            className={("skey-sidebar-menu-fallback")+(uiCtx.sidemenu_fallback_active ? " --active": "")}>
            
                <div
                    ref={refSidebar}
                    className={("skey-sidebar-menu")+(uiCtx.sidemenu_active ? " --active": "")}>
                    
                        <div
                            className="inner-sidebar-menu">

                                {uiCtx.sidemenu_tab === SidemenuTabs.Shortkeys ? <ShortkeysTab /> : uiCtx.sidemenu_tab === SidemenuTabs.Settings ? <SettingsTab /> : ''}

                        </div>

                </div>

        </div>
    );

}