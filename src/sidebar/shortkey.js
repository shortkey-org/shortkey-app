import React, { useState } from "react";
import PopupMenu from "../components/PopupMenu";
import { useAuth } from "../contexts/AuthCtx";
import { useUI } from "../contexts/UICtx";
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
            active_shortkey: skey,
            active_shortkey_type: type,
        });
        // uiCtx.setSidemenuTab(SidebarTabsList.EditShortkey);
    }

    const callback = (e) => {
        /** trigger refresh */
        // skCtx.reloadShortkeys();
    }

    const handleOnDeleteClick = async (e) => {
        if (!deleteActive) {
            setDeleteActive(true);
        }
        else {
            setMenuPopupVisible(false);
            /** delete */
            // let res = await skCtx.deleteShortkey({
            //     id: skey.id,
            //     type: type
            // }, callback);

            // /** trigger refresh */
            // if (authCtx.account_type === AccountType.Remote && res && type === ShortkeyType.Remote) {
            //     // skCtx.reloadShortkeys();
            // }
        }
    }

    const handleAddToCommunikeyClick = (e) => {

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
                        <div className="r r1">
                            <img src={favicon} />
                        </div>
                        <div className="r r2">
                            <span>{title}</span>
                        </div>

                        <div className="r r3">
                        <a target={'_blank'} href={link}>
                            <span className={'text link'}>{link}</span>
                        </a>
                        </div>

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
                                return (<div key={i} className="r r2 --tag">
                                    <span className="text">{`+${skey.tags.length - i}`}</span>
                                </div>);
                            }

                            return (<div key={i} className="r r2 --tag">
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


                    {/* <Button onClick={handleOnEditClick} type={ButtonTypes.normal_noborder} icon={IconsList.Edit} className={'--align-left mb-4 --block-size'} text={`Edit`} />
                    {authCtx.authenciated && authCtx.account_type === AccountType.Remote && <Button onClick={handleAddToCommunikeyClick} title={"Contrubute it to communikey"} type={ButtonTypes.normal_noborder} icon={IconsList.Groups3} className={'--align-left mb-4 --block-size'} text={`Publish in communikey`} />}

                    {authCtx.authenciated && authCtx.account_type === AccountType.Remote && type === ShortkeyType.Local && <Button onClick={handleAddToCommunikeyClick} title={"Move it to account"} type={ButtonTypes.normal_noborder} icon={IconsList.Add} className={'--align-left mb-4 --block-size'} text={`Move to account`} />}

                    <div className="--seprator"></div>

                    <Button onClick={handleOnDeleteClick} type={ButtonTypes.normal_noborder} icon={IconsList.Delete} className={'--align-left --block-size'} text={deleteActive ? `Are you sure?` : `Delete`} /> */}

                </PopupMenu>

            </div>

        </div>
    );
}


export default Shortkey;