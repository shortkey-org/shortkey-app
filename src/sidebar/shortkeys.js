import { useEffect, useRef, useState } from "react";
import Input from "../components/input";
import { useSk } from "../contexts/SkCtx";
import { DialogTabList, useUI } from "../contexts/UICtx";
import AddIcon from "../icons/Add";
import SearchIcon from "../icons/Search";
import SidebarContent from "./content";
import SidebarHeader from "./hdr";
import Shortkey from "./shortkey";

export default function ShortkeysTab() {

    const skCtx = useSk();
    const uiCtx = useUI();

    const searchBarRef = useRef(null);

    const [focused, setFocused] = useState(false);

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
        skCtx.searchShortkeys(e.target.value);
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
                        <Input ref={searchBarRef} onFocus={handleOnFocus} onBlur={handleOnBlur} autoFocus={false} onChange={handleChangeInSearch} className={'--block-size'} htmlType={"search"} placeholder="Search for Shortkeys and Keywords" icon={null}>
                            {/* <SearchIcon style={{ marginRight: 8 }} /> */}
                            {!focused && <button style={{borderRadius: 0, padding: "0 8px", paddingRight: 16}} onClick={handleAddClick} className="btn t2">
                                <span style={{marginRight: 6}}>
                                    <AddIcon />
                                </span>
                                <span>
                                    Collect
                                </span>
                            </button>}
                        </Input>
                    </div>
                    {/* <div className="--auto-w">
                        <button
                            onClick={handleAddClick}
                            className="btnIco icoB">
                            <span>
                                <AddIcon />
                            </span>
                        </button>
                    </div> */}
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
                            <span>
                                Collect Shortkey
                            </span>
                        </button>
                    </div>

                </div>

            </SidebarContent>
        </>
    );

}