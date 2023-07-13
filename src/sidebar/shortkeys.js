import { useEffect, useRef, useState } from "react";
import Input from "../components/input";
import { useSk } from "../contexts/SkCtx";
import { DialogTabList, useUI } from "../contexts/UICtx";
import AddIcon from "../icons/Add";
import CloseIcon from "../icons/Close";
import SearchIcon from "../icons/Search";
import SidebarContent from "./content";
import SidebarHeader from "./hdr";
import Shortkey from "./shortkey";

export default function ShortkeysTab() {

    const skCtx = useSk();
    const uiCtx = useUI();

    const searchBarRef = useRef(null);

    const [focused, setFocused] = useState(false);
    const [showClearIcon, setShowClearIcon] = useState(false);

    const handleAddClick = (e) => {
        uiCtx.setAny({
            dialog_visible: true,
            dialog_active_tab: DialogTabList.AddShortkey
        })
    }

    const handleChangeInSearch = (e) => {
        if(e.target.value.length < 1) {
            searchBarRef.current.blur();
        }
        if(e.target.value.length > 0) {
            setShowClearIcon(true);
        }
        else
        {
            setShowClearIcon(false);
        }
        skCtx.searchShortkeys(e.target.value);
    }

    const handleClearSearchClick = (e) => {
        searchBarRef.current.value = '';
        skCtx.searchShortkeys('');
        setFocused(false);
        setShowClearIcon(false);
    }

    useEffect(() => {
        // if(searchBarRef.current) {
            // console.log("Focusing")
            // searchBarRef.current.focus();
        // }
    }, [uiCtx.sidemenu_active]);

    const handleOnFocus = (e) => {
        setFocused(true);
    }

    const handleOnBlur = (e) => {
        setFocused(false);
    }

    
    useEffect(() => {

        const onKeyPress = (e) => {
            if (!document.activeElement || (document.activeElement.tagName !== 'INPUT')) {
                if(uiCtx.sidemenu_active) {
                    searchBarRef.current.focus();
                }
            }
        }

        document.addEventListener("keypress", onKeyPress);

        return () => {
            document.removeEventListener("keypress", onKeyPress);
        }
    }, [uiCtx.sidemenu_active]);

    return (
        <>
            <SidebarHeader />
            <SidebarContent>

                <div className="skeys-hdr-container">
                    <div>
                        <Input ref={searchBarRef} onFocus={handleOnFocus} onBlur={handleOnBlur} autoFocus={false} onChange={handleChangeInSearch} className={'--block-size'} htmlType={"text"} placeholder="Search for Shortkeys and Keywords" icon={null}>
                            {showClearIcon && <button onClick={handleClearSearchClick} className="btnIco" style={{marginRight: 2}}>
                                <span style={{transform: "scale(0.8)"}}>
                                    <CloseIcon />
                                </span>
                            </button>}
                            {!focused && !showClearIcon && <button style={{borderRadius: 0, padding: "0 8px", paddingRight: 16}} onClick={handleAddClick} className="btn t2">
                                <span style={{marginRight: 6}}>
                                    <AddIcon />
                                </span>
                                <span className="fix-text-base">
                                    Collect
                                </span>
                            </button>}
                        </Input>
                    </div>
                </div>

                <div className="skeys-wrapper">

                    <div className="vS10"></div>

                    {skCtx.currentData.map((sk) => {
                        return (
                            <Shortkey key={sk.id} title={sk.shortkey} link={sk.url} favicon={sk.favicon} skey={sk} />
                        );
                    })}

                    <div className="vS10"></div>

                    <div className="cW100p cFlex row jcenter acenter">
                        <button onClick={handleAddClick} className="btn t2 tc">
                            <span style={{marginRight: 6}}>
                                <AddIcon />
                            </span>
                            <span className="fix-text-base">
                                Collect
                            </span>
                        </button>
                    </div>

                </div>

            </SidebarContent>
        </>
    );

}