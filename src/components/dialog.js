import { useEffect, useRef, useState } from "react";
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
import { useNavigate } from 'react-router-dom';
import { useOnClickOutside } from "../hooks/useOnClickOutside";

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
            dialog_active_tab: DialogTabList.Privacy
        });
    }

    const handleClose = (e) => {
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
                        className="btnIco --noHoverEffect"
                        onClick={handleClose}>
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
                    <CheckboxControl onChange={handleCheck("essential")} label={"Essential cookies"} desc={"enable authentification, navigation, and other core functions. Disabling such cookies may affect how Shortkey websites and services technically operate. That's why essential cookies are enabled by default."} disabled={true} isChecked={authCtx.cookies.essential} />
                </div>
                <div
                    style={{ padding: '8px 16px' }}
                    className="col cW100p cFlex row jcenter acenter">
                    <CheckboxControl onChange={handleCheck("other")} label={"Other cookies"} desc={"are auxiliary, they help Shortkey websites and services work more efficiently for your convenience. These cookies help to restore web page sessions, remember preferred region, save personal preferences, and more."} isChecked={authCtx.cookies.other} />
                </div>
                <div
                    style={{ padding: '8px 16px' }}
                    className="col cW100p cFlex row jcenter acenter">
                    <CheckboxControl onChange={handleCheck("analytical")} label={"Analytical cookies"} desc={"improve experience of working on Shortkey services. They remember preference settings, anonymously analyze website traffic, and help displaying relevant ads."} isChecked={authCtx.cookies.analytical} />
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

    const authCtx = useAuth();
    const uiCtx = useUI();

    const handleBackClick = () => {
        uiCtx.setAny({
            dialog_active_tab: DialogTabList.Cookies
        })
    }

    const handleClose = (e) => {
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
                className="hdrDialog cFlex row jsb acenter">

                <div>
                    <button
                        className="btnIco"
                        onClick={handleBackClick}>
                        <span>
                            <BackIcon />
                        </span>
                    </button>
                </div>

                <div>

                </div>

                <div>
                    <button
                        className="btnIco --noHoverEffect"
                        onClick={handleClose}>
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


export const PrivacyDialog = () => {

    const authCtx = useAuth();
    const uiCtx = useUI();

    const handleBackClick = () => {
        uiCtx.setAny({
            dialog_active_tab: DialogTabList.Cookies
        })
    }

    const handleClose = (e) => {
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
                className="hdrDialog cFlex row jsb acenter">

                <div>
                    <button
                        className="btnIco"
                        onClick={handleBackClick}>
                        <span>
                            <BackIcon />
                        </span>
                    </button>
                </div>

                <div>

                </div>

                <div>
                    <button
                        className="btnIco --noHoverEffect"
                        onClick={handleClose}>
                        <span>
                            <CloseIcon />
                        </span>
                    </button>
                </div>

            </div>

            <div
                className="bodyDialog cFlex col jstart acenter">
                <div style={{ marginBottom: 16 }} className="col cW100p cFlex row jcenter acenter">
                    <span className="fs24 fCPrimary">Privacy</span>
                </div>

                <div className="col cW100p cFlex row jcenter acenter">
                    <p className="fs20 fCBody lH25" style={{ maxWidth: '80%', textAlign: 'center' }}>
                        (@TODO: PrivacyContent) At Shortkey.org, accessible from www.shortkey.org, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Shortkey.org and how we use it.  If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.  This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Shortkey.org. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the Free Privacy Policy Generator. By using our website, you hereby consent to our Privacy Policy and agree to its terms. The personal information that you are asked to provide, and the reasons why you are asked to provide it, will
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

                <div className="row cW80p cFlex row jstart acenter" style={{ width: '80%', margin: '0 auto' }}>
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
                        <span style={{ marginRight: 12 }}>
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

    const [createdShortkey, setCreatedShortkey] = useState(null);

    const [tags, setTags] = useState([]);

    const handleCloseClick = (e) => {
        uiCtx.setData({
            newShortkeyValue: undefined
        });
        uiCtx.setAny({
            dialog_visible: false,
            dialog_active_tab: null
        });
    }

    const handleDelete = async (e) => {
        if (createdShortkey) {
            await skCtx.deleteShortkey(createdShortkey);
        }
        handleCloseClick(e);
    }

    const handleAdd = async (e) => {
        let shortkey = shortkeyInput.current.value;
        let url = urlInput.current.value;
        // let tags_i = tagsInput.current.value;
        // let tags = [];

        // ((tags_i || "").split(",")).map((tag) => {
        //     if(tag.trim() && tag.trim().length > 0)
        //     {
        //         tags.push(tag.trim());
        //     }
        // })

        if ((shortkey || "").trim().length < 1 || (url || "").trim().length < 1) {
            return;
        }

        /** Add it */
        await skCtx.addShortkey(shortkey.trim(), url.trim(), tags);
        handleCloseClick(e);
    }

    const handleOnKeyUp = async (e) => {
        e.preventDefault();

        if(e.key === 'Enter' && createdShortkey) {
            if((e.target.value || "").length < 1) {
                handleCloseClick();
                return;
            }
        }

        /** Support phones */
        let k = e.target.value.charAt(e.target.selectionStart - 1).charCodeAt();

        if (e.key === 'Enter' || e.keyCode === 32 || e.keyCode === 188 || (e.keyCode === 229 && (k === 32 || k === 188))) {
            let tag = (e.target.value || '').trim().toLowerCase().replaceAll(',', '');
            if (tags.includes(tag)) {
                return;
            }
            if (tag && tag.length > 1 && !tags.includes(tag)) {
                setTags([...tags, tag]);
                e.target.value = null;
            }
        }

    }

    const handleRemoveTag = (i) => (e) => {
        let newtags = [...tags];
        newtags.splice(i, 1);
        setTags(newtags);
    }


    const checkShortkeyField = () => {
        return (shortkeyInput.current.value && shortkeyInput.current.value.length > 0);
    }

    const checkURLField = () => {
        return (urlInput.current.value && urlInput.current.value.length > 0);
    }

    const createShortkey = async () => {
        let shortkey = null;
        if (createdShortkey) {
            shortkey = await skCtx.updateShortkey({
                id: createdShortkey.id,
                shortkey: shortkeyInput.current.value.trim(),
                url: urlInput.current.value.trim(),
                tags: tags
            });
        }
        else {
            shortkey = await skCtx.addShortkey(shortkeyInput.current.value.trim(), urlInput.current.value.trim(), tags);
        }
        setCreatedShortkey(shortkey);
    }

    const handleShortkeyKeyUp = async (e) => {
        if(e.key === 'Enter') {
            urlInput.current.focus();
            if(e && e.target.value && e.target.value.length > 0) {
                setTags([...tags, e.target.value]);
            }
        }
    }

    const handleShortkeyChange = async (e) => {
        if (checkShortkeyField() && checkURLField()) {
            await createShortkey();
        }
    }

    const handleURLKeyUp = async (e) => {
        if(e.key === 'Enter') {
            tagsInput.current.focus();
        }
    }

    const handleURLChange = async (e) => {
        if (checkShortkeyField() && checkURLField()) {
            await createShortkey();
        }
    }

    useEffect(() => {
        if (checkShortkeyField() && checkURLField()) {
            createShortkey();
        }
    }, [tags]);

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
                    <Input ref={shortkeyInput} onKeyUp={handleShortkeyKeyUp} onChange={handleShortkeyChange} autoFocus={true} placeholder="Shortkey" defaultValue={uiCtx.data['newShortkeyValue'] || ""} className={"w80p"} />
                </div>

                <div style={{ marginBottom: 24 }} className="col cW100p cFlex row jcenter acenter">
                    <Input ref={urlInput} onKeyUp={handleURLKeyUp} onChange={handleURLChange} placeholder="Target URL" className={"w80p"} />
                </div>

                <div style={{ marginBottom: 24 }} className="col cW100p cFlex row jcenter acenter">
                    <Input ref={tagsInput} onKeyUp={handleOnKeyUp} placeholder="Keywords (separated with comma)" className={"w80p"} />
                </div>

                <div style={{ marginBottom: 24, flexWrap: 'wrap' }} className="cW100p cFlex row jstart acenter w80p">
                    {tags.map((tag, i) => {
                        return (
                            <span key={tag} onClick={handleRemoveTag(i)} title="Remove this tag" className="sk-tag" style={{ margin: 4 }}>
                                <span>{tag}</span>
                                <button onClick={handleRemoveTag(i)}>x</button>
                            </span>
                        );
                    })}
                </div>

                <div style={{ marginTop: 30 }} className="col cW100p cFlex row jcenter acenter">
                    <button className="btn t2 tc" onClick={handleDelete}>
                        <span style={{ marginRight: 12 }}>
                            <DeleteIcon />
                        </span>
                        <span>
                            Delete shortkey
                        </span>
                    </button>
                </div>

                <div className="cH40"></div>
            </div>
        </>
    );

}


export const EditShortkeyDialog = () => {

    const uiCtx = useUI();
    const skCtx = useSk();

    const shortkeyInput = useRef(null);
    const urlInput = useRef(null);
    const tagsInput = useRef(null);

    const [tags, setTags] = useState([]);

    const handleCloseClick = (e) => {
        uiCtx.setData({
            editShortkeyData: undefined
        });
        uiCtx.setAny({
            dialog_visible: false,
            dialog_active_tab: null
        });
    }

    const handleDelete = async (e) => {
        await skCtx.deleteShortkey({
            ...uiCtx.data['editShortkeyData'] || {}
        });
        handleCloseClick(e);
    }

    const handleAdd = async (e) => {
        let shortkey = shortkeyInput.current.value;
        let url = urlInput.current.value;

        if ((shortkey || "").trim().length < 1 || (url || "").trim().length < 1) {
            return;
        }

        /** Add it */
        await skCtx.updateShortkey({
            ...uiCtx.data['editShortkeyData'] || {},
            shortkey: shortkey.trim(),
            url: url.trim(),
            tags: tags
        });
        handleCloseClick(e);
    }

    const handleOnKeyUp = async (e) => {
        e.preventDefault();

        if(e.key === 'Enter') {
            if((e.target.value || "").length < 1) {
                handleCloseClick();
                return;
            }
        }

        /** Support phones */
        let k = e.target.value.charAt(e.target.selectionStart - 1).charCodeAt();

        if (e.key === 'Enter'/* || e.keyCode === 188 || (e.keyCode === 229 && (k === 32 || k === 188))*/) {
            let tag = (e.target.value || '').trim().toLowerCase().replaceAll(',', '');
            // if (tag.length < 2 || tag.length > 24) {

            //     return;
            // }
            if (tags.includes(tag)) {
                // setWarningText("Can't add same tag again.");
                return;
            }
            if (tag && tag.length > 1 && !tags.includes(tag)) {
                // if (tags.length > 4) {
                //     setWarningText("Must be 5 or less than 5 tags.");
                // }
                // else {
                setTags([...tags, tag]);
                e.target.value = null;
                // }
            }
        }

    }

    const handleRemoveTag = (i) => (e) => {
        let newtags = [...tags];
        newtags.splice(i, 1);
        setTags(newtags);
    }

    
    const checkShortkeyField = () => {
        return (shortkeyInput.current.value && shortkeyInput.current.value.length > 0);
    }

    const checkURLField = () => {
        return (urlInput.current.value && urlInput.current.value.length > 0);
    }

    const updateShortkey = async () => {
        await skCtx.updateShortkey({
            ...uiCtx.data['editShortkeyData'] || {},
            shortkey: shortkeyInput.current.value.trim(),
            url: urlInput.current.value.trim(),
            tags: tags
        });
    }

    useEffect(() => {
        let tags = uiCtx.data['editShortkeyData'].tags || [];
        setTags([...tags]);
    }, [uiCtx.data['editShortkeyData']]);

    const handleShortkeyChange = async (e) => {
        if (checkShortkeyField() && checkURLField()) {
            await updateShortkey();
        }
    }

    const handleShortkeyKeyUp = async (e) => {
        if(e.key === 'Enter') {
            urlInput.current.focus();
        }
    }

    const handleURLChange = async (e) => {
        if (checkShortkeyField() && checkURLField()) {
            await updateShortkey();
        }
    }

    const handleURLKeyUp = async (e) => {
        if(e.key === 'Enter') {
            tagsInput.current.focus();
        }
    }

    useEffect(() => {
        if (checkShortkeyField() && checkURLField()) {
            updateShortkey();
        }
    }, [tags]);

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
                    <Input ref={shortkeyInput} onKeyUp={handleShortkeyKeyUp} onChange={handleShortkeyChange} autoFocus={true} placeholder="Shortkey" defaultValue={uiCtx.data['editShortkeyData'].shortkey || ""} className={"w80p"} />
                </div>

                <div style={{ marginBottom: 24 }} className="col cW100p cFlex row jcenter acenter">
                    <Input ref={urlInput} onKeyUp={handleURLKeyUp} onChange={handleURLChange} placeholder="Target URL" defaultValue={uiCtx.data['editShortkeyData'].url || ""} className={"w80p"} />
                </div>

                <div style={{ marginBottom: 24 }} className="col cW100p cFlex row jcenter acenter">
                    <Input ref={tagsInput} onKeyUp={handleOnKeyUp} placeholder="Keywords (separated with comma)" className={"w80p"} />
                </div>

                <div style={{ marginBottom: 24, flexWrap: 'wrap' }} className="cW100p cFlex row jstart acenter w80p">
                    {tags.map((tag, i) => {
                        return (
                            <span key={tag} title="Remove this tag" className="sk-tag" style={{ margin: 4 }}>
                                <span>{tag}</span>
                                <button onClick={handleRemoveTag(i)}>
                                    <CloseIcon />
                                </button>
                            </span>
                        );
                    })}
                </div>

                <div style={{ marginTop: 30 }} className="col cW100p cFlex row jcenter acenter">
                    <button className="btn t2 tc" onClick={handleDelete}>
                        <span style={{ marginRight: 12 }}>
                            <DeleteIcon />
                        </span>
                        <span>
                            Delete shortkey
                        </span>
                    </button>
                </div>

                <div className="cH40"></div>
            </div>
        </>
    );

}


export function BounceLoader({
    className = null,
    showBack = true
}) {

    const uiCtx = useUI();

    const navigateTo = useNavigate();

    return (
        <>
            <div className={("sk-ldr") + (className ? " " + className : "")}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            {uiCtx.data['loadText'] && <div style={{ marginTop: 20 }}>
                <span>{uiCtx.data['loadText']}</span>
            </div>}
            {showBack && <div style={{ position: 'absolute', bottom: 60 }}>
                <button onClick={() => window.location.assign('/')} className="btnIco label">
                    <span style={{ marginRight: 6 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-160 160-480l320-320 57 56-224 224h487v80H313l224 224-57 56Z" /></svg>
                    </span>
                    <span className="text">Back</span>
                </button>
            </div>}
        </>
    );
}

export const LoadingDialog = () => {

    return (
        <>
            <div
                className="cW100p cH100p cFlex col jcenter acenter">

                <BounceLoader className={'--purple'} />

            </div>
        </>
    );

}

export default function Dialog() {

    const authCtx = useAuth();
    const uiCtx = useUI();
    const dialogRef = useRef(null);

    useOnClickOutside(dialogRef, (e) => {
        if (uiCtx.dialog_active_tab === DialogTabList.Start || uiCtx.dialog_active_tab === DialogTabList.Cookies || uiCtx.dialog_active_tab === DialogTabList.Terms) {
            authCtx.activateGuestMode();
            uiCtx.setAny({
                dialog_visible: false
            })
        }
        else if (uiCtx.dialog_active_tab === DialogTabList.AddShortkey) {
            uiCtx.setData({
                newShortkeyValue: undefined
            });
            uiCtx.setAny({
                dialog_visible: false,
                dialog_active_tab: null
            });
        }
        else if (uiCtx.dialog_active_tab === DialogTabList.EditShortkey) {
            uiCtx.setData({
                editShortkeyData: undefined
            });
            uiCtx.setAny({
                dialog_visible: false,
                dialog_active_tab: null
            });
        }
        else if (uiCtx.dialog_active_tab === DialogTabList.Loading) {
            /** NOTHING. */
        }
    }, (e) => {/**WIthin */ }, uiCtx.dialog_visible);

    return (
        <>
            <div
                className={("dialog-back") + (uiCtx.dialog_visible ? " -visible" : " -hidden")}>
                <dialog ref={dialogRef} open={uiCtx.dialog_visible} className={(` __tab-${uiCtx.dialog_active_tab}`)}>
                    <div>

                        {uiCtx.dialog_active_tab === DialogTabList.Cookies ? <CookiesOptionsDialog /> : uiCtx.dialog_active_tab === DialogTabList.Terms ? <TermsOfUseDialog /> : uiCtx.dialog_active_tab === DialogTabList.Start ? <StartUseDialog /> : uiCtx.dialog_active_tab === DialogTabList.ViewShortkey ? <ViewShortkeyDialog /> : uiCtx.dialog_active_tab === DialogTabList.AddShortkey ? <AddShortkeyDialog /> : uiCtx.dialog_active_tab === DialogTabList.EditShortkey ? <EditShortkeyDialog /> : uiCtx.dialog_active_tab === DialogTabList.Loading ? <LoadingDialog /> : uiCtx.dialog_active_tab === DialogTabList.Privacy ? <PrivacyDialog /> : ""}

                    </div>
                </dialog>
            </div>
        </>
    );

}