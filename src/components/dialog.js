import { useRef } from "react";
import { useAuth } from "../contexts/AuthCtx";
import { useSk } from "../contexts/SkCtx";
import { DialogTabList, useUI } from "../contexts/UICtx";
import { getApiBase } from "../env";
import AddIcon from "../icons/Add";
import BackIcon from "../icons/Back";
import CloseIcon from "../icons/Close";
import DeleteIcon from "../icons/Delete";
import CheckboxControl from "./checkbox";
import Input from "./input";


const StartUseDialog = () => {

    const uiCtx = useUI();
    const authCtx = useAuth();

    const handleCloseClick = (e) => {
        handleContinueGuestClick(e);
    }

    const handleLoginClick = (e) => {
        /** AssignID Login */
        window.location.assign(`${getApiBase()}/user`);
    }

    const handleCookiesClick = (e) => {
        e.preventDefault();
        uiCtx.setAny({
            dialog_active_tab: DialogTabList.Cookies
        });
    }

    const handleContinueGuestClick = (e) => {
        e.preventDefault();
        /**
         * Set Account type local
         * Deploy cookies
         */
        authCtx.activateGuestMode();
        uiCtx.setAny({
            dialog_visible: false
        })
    }

    return (
        <>
            <div
                className={("hdrDialog _abs cFlex row jsb acenter")}>

                <div>

                </div>

                <div>

                </div>

                <div>
                    <button
                        className="btnIco --noHoverEffect"
                        onClick={handleCloseClick}>
                        <span>
                            <CloseIcon />
                        </span>
                    </button>
                </div>

            </div>

            <div
                className="bodyDialog cFlex col jstart acenter">

                <div
                    style={{ padding: '20px 0' }}
                    className="col cW100p cFlex row jcenter acenter">
                    <img src="/shortkey.png" />
                </div>

                <div className="col cW100p cFlex row jcenter acenter">
                    <span className="fs24 fCPrimary">Shortkey use cookies</span>
                </div>

                <div className="col cW100p cFlex row jcenter acenter" style={{ maxWidth: '70%', textAlign: 'center', padding: '12px 0' }}>
                    <p className="fs20 fCBody">By continuing, we assume your permission to deploy our <a onClick={handleCookiesClick} className="fs20 fCBody" href="#">cookies</a></p>
                </div>

                <div className="col cW100p cFlex row jcenter acenter" style={{ maxWidth: '70%', textAlign: 'center', padding: '12px 0' }}>
                    <button onClick={handleLoginClick} className="btn t1 block">
                        <span>Login</span>
                    </button>
                </div>

                <div className="col cW100p cFlex row jcenter acenter" style={{ maxWidth: '70%', textAlign: 'center', padding: '12px 0' }}>
                    <span className="fs20 fCBody">or</span>
                </div>

                <div className="col cW100p cFlex row jcenter acenter" style={{ maxWidth: '70%', textAlign: 'center', padding: '12px 0' }}>
                    <a onClick={handleContinueGuestClick} className="fs20 fCBody" href="#">Continue without account</a>
                </div>

                <div className="cH40"></div>

            </div>
        </>
    );
}

export const CookiesOptionsDialog = () => {

    const authCtx = useAuth();
    const uiCtx = useUI();

    const handleBackClick = () => {
        uiCtx.setAny({
            dialog_active_tab: DialogTabList.Start
        })
    }

    const handleCheck = (cookieType) => (e) => {
        console.log(e)
        authCtx.setCookiesAllowed({
            [cookieType]: e.target.checked
        });
    }

    const handlePrivacy = (e) => {
        e.preventDefault();
        uiCtx.setAny({
            dialog_active_tab: DialogTabList.Terms
        });
    }

    const handleTerms = (e) => {
        e.preventDefault();
        uiCtx.setAny({
            dialog_active_tab: DialogTabList.Terms
        });
    }

    return (
        <>
            <div
                className="hdrDialog cFlex row jsb acenter">

                <div>
                    <button
                        onClick={handleBackClick}
                        className="btnIco">
                        <span>
                            <BackIcon />
                        </span>
                    </button>
                </div>

                <div>
                    <span className="fs24 fCPrimary">Cookies setup</span>
                </div>

                <div>
                    <button
                        className="btnIco --noHoverEffect">
                        <span>
                            <CloseIcon />
                        </span>
                    </button>
                </div>

            </div>

            <div
                className="bodyDialog cFlex col jstart acenter">
                <div
                    style={{ padding: '8px 16px' }}
                    className="col cW100p cFlex row jcenter acenter">
                    <CheckboxControl onChange={handleCheck("essential")} label={"Essential cookies"} desc={"enable authentification, navigation, and other core functions. Disabling such cookies may affect how Shortkey websites and services technically operate. That's why essential cookies are enabled by default."} disabled={true} isChecked={true} />
                </div>
                <div
                    style={{ padding: '8px 16px' }}
                    className="col cW100p cFlex row jcenter acenter">
                    <CheckboxControl onChange={handleCheck("other")} label={"Other cookies"} desc={"are auxiliary, they help Shortkey websites and services work more efficiently for your convenience. These cookies help to restore web page sessions, remember preferred region, save personal preferences, and more."} isChecked={true} />
                </div>
                <div
                    style={{ padding: '8px 16px' }}
                    className="col cW100p cFlex row jcenter acenter">
                    <CheckboxControl onChange={handleCheck("analytical")} label={"Analytical cookies"} desc={"improve experience of working on Yandex services. They remember preference settings, anonymously analyze website traffic, and help displaying relevant ads."} isChecked={false} />
                </div>

                <div
                    style={{ padding: '0 25px 30px 0' }}
                    className="col cW100p cFlex row jcenter acenter">
                    <span className="fs20 fCBody">Learn more about <a className="fs20 fCBody" href="#" onClick={handlePrivacy}>Privacy</a> and <a className="fs20 fCBody" href="#" onClick={handleTerms}>Terms</a></span>
                </div>
            </div>
        </>
    );

}


export const TermsOfUseDialog = () => {

    return (
        <>
            <div
                className="hdrDialog cFlex row jsb acenter">

                <div>
                    <button
                        className="btnIco">
                        <span>
                            <BackIcon />
                        </span>
                    </button>
                </div>

                <div>

                </div>

                <div>
                    <button
                        className="btnIco --noHoverEffect">
                        <span>
                            <CloseIcon />
                        </span>
                    </button>
                </div>

            </div>

            <div
                className="bodyDialog cFlex col jstart acenter">
                <div style={{ marginBottom: 16 }} className="col cW100p cFlex row jcenter acenter">
                    <span className="fs24 fCPrimary">Terms of use</span>
                </div>

                <div className="col cW100p cFlex row jcenter acenter">
                    <p className="fs20 fCBody lH25" style={{ maxWidth: '80%', textAlign: 'center' }}>
                        At Shortkey.org, accessible from www.shortkey.org, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Shortkey.org and how we use it.  If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.  This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Shortkey.org. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the Free Privacy Policy Generator. By using our website, you hereby consent to our Privacy Policy and agree to its terms. The personal information that you are asked to provide, and the reasons why you are asked to provide it, will
                    </p>
                </div>

                <div className="cH40"></div>
            </div>
        </>
    );

}


export const ViewShortkeyDialog = () => {

    return (
        <>
            <div
                className="hdrDialog cFlex row jsb acenter">

                <div>
                </div>

                <div>

                </div>

                <div>
                    <button
                        className="btnIco --noHoverEffect">
                        <span>
                            <CloseIcon />
                        </span>
                    </button>
                </div>

            </div>

            <div
                className="bodyDialog cFlex col jstart acenter">
                <div style={{ marginBottom: 24 }} className="col cW100p cFlex row jcenter acenter">
                    <Input placeholder="Shortkey" className={"w80p"} />
                </div>

                <div style={{ marginBottom: 24 }} className="col cW100p cFlex row jcenter acenter">
                    <Input placeholder="Target URL" className={"w80p"} />
                </div>

                <div style={{ marginBottom: 24 }} className="col cW100p cFlex row jcenter acenter">
                    <Input placeholder="Keywords" className={"w80p"} />
                </div>

                <div className="row cW80p cFlex row jstart acenter" style={{width: '80%', margin: '0 auto'}}>
                    <span className="sk-tag">
                        <span className="text">tag</span>
                    </span>
                    <span className="sk-tag">
                        <span className="text">tag</span>
                    </span>
                    <span className="sk-tag">
                        <span className="text">tag</span>
                    </span>
                    <span className="sk-tag">
                        <span className="text">tag</span>
                    </span>
                    <span className="sk-tag">
                        <span className="text">tag</span>
                    </span>
                    <span className="sk-tag">
                        <span className="text">tag</span>
                    </span>
                    <span className="sk-tag">
                        <span className="text">tag</span>
                    </span>
                </div>

                <div style={{ marginTop: 24 }} className="col cW100p cFlex row jcenter acenter">
                    <button className="btn t2 tc">
                        <span style={{marginRight: 12}}>
                            <DeleteIcon />
                        </span>
                        <span>
                            Delete
                        </span>
                    </button>
                </div>

                <div className="cH40"></div>
            </div>
        </>
    );

}


export const AddShortkeyDialog = () => {

    const uiCtx = useUI();
    const skCtx = useSk();

    const shortkeyInput = useRef(null);
    const urlInput = useRef(null);
    const tagsInput = useRef(null);

    const handleCloseClick = (e) => {
        uiCtx.setAny({
            dialog_visible: false
        });
    }

    const handleAdd = async (e) => {
        let shortkey = shortkeyInput.current.value;
        let url = urlInput.current.value;
        let tags_i = tagsInput.current.value;
        let tags = [];

        ((tags_i || "").split(",")).map((tag) => {
            if(tag.trim() && tag.trim().length > 0)
            {
                tags.push(tag.trim());
            }
        })

        if((shortkey || "").trim().length < 1 || (url || "").trim().length < 1)
        {
            return;
        }

        /** Add it */
        await skCtx.addShortkey(shortkey.trim(), url.trim(), tags);
        handleCloseClick(e);
    }

    return (
        <>
            <div
                className="hdrDialog cFlex row jsb acenter">

                <div>
                </div>

                <div>

                </div>

                <div>
                    <button
                        onClick={handleCloseClick}
                        className="btnIco --noHoverEffect">
                        <span>
                            <CloseIcon />
                        </span>
                    </button>
                </div>

            </div>

            <div
                className="bodyDialog cFlex col jstart acenter">
                <div style={{ marginBottom: 24 }} className="col cW100p cFlex row jcenter acenter">
                    <Input ref={shortkeyInput} placeholder="Shortkey" className={"w80p"} />
                </div>

                <div style={{ marginBottom: 24 }} className="col cW100p cFlex row jcenter acenter">
                    <Input ref={urlInput} placeholder="Target URL" className={"w80p"} />
                </div>

                <div style={{ marginBottom: 24 }} className="col cW100p cFlex row jcenter acenter">
                    <Input ref={tagsInput} placeholder="Keywords (separated with comma)" className={"w80p"} />
                </div>

                <div style={{ marginTop: 30 }} className="col cW100p cFlex row jcenter acenter">
                    <button className="btn t2 tc" onClick={handleAdd}>
                        <span style={{marginRight: 12}}>
                            <AddIcon />
                        </span>
                        <span>
                            Add shortkey
                        </span>
                    </button>
                </div>

                <div className="cH40"></div>
            </div>
        </>
    );

}


export default function Dialog() {

    const uiCtx = useUI();

    return (
        <>
            <div
                className={("dialog-back")+(uiCtx.dialog_visible ? " -visible" : " -hidden")}>
                <dialog open={uiCtx.dialog_visible} className={(` __tab-${uiCtx.dialog_active_tab}`)}>
                    <div>

                        {uiCtx.dialog_active_tab === DialogTabList.Cookies ? <CookiesOptionsDialog /> : uiCtx.dialog_active_tab === DialogTabList.Terms ? <TermsOfUseDialog /> : uiCtx.dialog_active_tab === DialogTabList.Start ? <StartUseDialog /> : uiCtx.dialog_active_tab === DialogTabList.ViewShortkey ? <ViewShortkeyDialog /> : uiCtx.dialog_active_tab === DialogTabList.AddShortkey ? <AddShortkeyDialog /> : ""}

                    </div>
                </dialog>
            </div>
        </>
    );

}