import CheckboxControl from "../components/checkbox";
import { SettingKey, useAuth } from "../contexts/AuthCtx";
import { getApiBase } from "../env";
import SidebarContent from "./content";
import SidebarHeader from "./hdr";

export default function SettingsTab() {

    const authCtx = useAuth();

    const handleLoginClick = (e) => {
        /** AssignID Login */
        window.location.assign(`${getApiBase()}/user`);
    }

    const handleInstantLauncherChanged = (e) => {
        authCtx.changeSetting(SettingKey.instantLauncher, e.target.checked);
    }

    const handleAddNewShortkeyButton = (e) => {
        authCtx.changeSetting(SettingKey.addNewShortkeyButton, e.target.checked);
    }

    const handleHideProductHunt = (e) => {
        authCtx.changeSetting(SettingKey.hideProductHunt, e.target.checked);
    }

    const handleMinimalistic = (e) => {
        authCtx.changeSetting(SettingKey.minimalistic, e.target.checked);
    }

    const handleBackgroundPicture = (e) => {
        authCtx.changeSetting(SettingKey.enableBackgroundPicture, e.target.checked);
    }

    return (
        <>
            <SidebarHeader />
            <SidebarContent>

                <>
                    <div
                        className="cW100p cFlex row jcenter acenter">
                        <button onClick={handleLoginClick} className="btn t2 tc">
                            <span>
                                Login
                            </span>
                        </button>
                    </div>
                </>

                <div className="cH40"></div>

                <CheckboxControl label={"Instant launcher"} onChange={handleInstantLauncherChanged} isChecked={authCtx.setting.instantLauncher} desc={"If there is a unique shortkey combination, it launches automatically."} />

                <div className="vS16"></div>

                <CheckboxControl label={"Add new Shortkey"} onChange={handleAddNewShortkeyButton} isChecked={authCtx.setting.addNewShortkeyButton} desc={"If there is no match shortkey, you will be given a option to create new one."} />

                <div className="vS16"></div>

                <CheckboxControl label={"Hide ProductHunt"} onChange={handleHideProductHunt} isChecked={authCtx.setting.hideProductHunt} desc={"Hide the ProductHunt button if you don't want to see it."} />

                <div className="vS16"></div>

                <CheckboxControl label={"Minimalistic"} onChange={handleMinimalistic} isChecked={authCtx.setting.minimalistic} desc={"Hide all superfluous elements, including the logo on the start page."} />

                <div className="vS16"></div>

                <CheckboxControl label={"Background picture"} onChange={handleBackgroundPicture} isChecked={authCtx.setting.enableBackgroundPicture} desc={"Use individual picture as desktop background."} />

            </SidebarContent>
        </>
    );

}