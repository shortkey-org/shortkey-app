import React, { useState } from "react";
import PopupMenu from "../components/PopupMenu";
import { useAuth } from "../contexts/AuthCtx";
import { useSk } from "../contexts/SkCtx";
import { DialogTabList, useUI } from "../contexts/UICtx";
import MoreIcon from "../icons/More";

const Shortkey = ({
    skey,
    type,
    link,
    title,
    favicon
}) => {
    const authCtx = useAuth();
    const uiCtx = useUI();
    const skCtx = useSk();

    const [menuPopupVisible, setMenuPopupVisible] = useState(false);
    const [menuPopupPos, setMenuPopupPos] = useState({ top: 0, right: 0 });

    const [deleteActive, setDeleteActive] = useState(false);

    const handleClick = (e) => {
        // uiCtx.setData({
        //     active_shortkey: skey,
        //     active_shortkey_type: type,
        // });
        // uiCtx.setSidemenuTab(SidebarTabsList.ViewShortkey);
    }

    const handleMenuPopupClose = (e) => {
        setDeleteActive(false);
        setMenuPopupVisible(false);
    }


    const handleMenuButtonClick = async (e) => {

        if (menuPopupVisible) {
            setMenuPopupVisible(false);
            return;
        }

        const { height } = e.target.getBoundingClientRect();

        setMenuPopupPos({
            top: height + 10,
            right: 0
        });
        setMenuPopupVisible(true);
    }

    const handleOnEditClick = (e) => {
        uiCtx.setData({
            editShortkeyData: skey
        });
        uiCtx.setAny({
            dialog_visible: true,
            dialog_active_tab: DialogTabList.EditShortkey
        });
        setMenuPopupVisible(false);
    }

    const handleTitleClick = handleOnEditClick;

    const handleTagClick = (tagName) => (e) => {
        uiCtx.setSidemenuVisibility(false);
        uiCtx.setData({
            clickedTag: tagName
        });
    }

    const handleOnDeleteClick = async (e) => {
        if (!deleteActive) {
            setDeleteActive(true);
        }
        else {
            setMenuPopupVisible(false);
            skCtx.deleteShortkey(skey);
        }
    }

    return (
        <div
            className="skey">

            <div
                className="inner-skey">

                <div
                    className="section section-1" onClick={handleClick}>
                    <div
                        className="col col-1">
                        {!authCtx.setting.hideIcons && <div className="r r1">
                            <img src={favicon} />
                        </div>}

                        <div
                            className="r r3">
                                <span className="combined">
                                    <span onClick={handleTitleClick} className="title">{title}</span>
                                    <a href={link} className="link">{link}</a>
                                </span>
                        </div>

                        {/* <div className="r r2">
                            <span className="title">{title}</span>
                        </div>

                        <div className="r r3">
                        <a target={'_blank'} href={link}>
                            <span className={'text link'}>{link}</span>
                        </a>
                        </div> */}

                    </div>
                    <div
                        className="col col-2">
                        {/* <a target={'_blank'} href={link}>
                            <span className={'link'}>{link}</span>
                        </a> */}

                        {skey && skey.tags && skey.tags.map((tag, i) => {

                            if (i > 3) {
                                return <React.Fragment key={i} />;
                            }

                            if (i === 3) {
                                return (<div key={i} className="r r2 sk-tag">
                                    <span className="text">{`+${skey.tags.length - i}`}</span>
                                </div>);
                            }

                            return (<div key={i} className="r r2 sk-tag" onClick={handleTagClick(tag)}>
                                <span className="text">{tag}</span>
                            </div>);

                        })}

                    </div>
                </div>

                <div
                    className="section section-2">
                    <div className="more-btn">
                        <button
                            onClick={handleMenuButtonClick}
                            className="btnIco">
                            <span>
                                <MoreIcon />
                            </span>
                        </button>
                    </div>
                </div>

                <PopupMenu
                    visible={menuPopupVisible}
                    position={menuPopupPos}
                    style={{ width: 240 }}
                    onClose={handleMenuPopupClose}>
                        
                        <div
                            onClick={handleOnEditClick}
                            className="popupButton">
                                <span>Edit</span>
                        </div>

                        <div
                            onClick={handleOnDeleteClick}
                            className="popupButton">
                                {deleteActive ? <span style={{color: 'rgb(195 37 37)'}}>Are you sure?</span> : <span>Delete</span>}
                        </div>

                </PopupMenu>

            </div>

        </div>
    );
}


export default Shortkey;