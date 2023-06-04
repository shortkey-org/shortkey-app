import { useEffect, useRef } from "react";
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

    const handleAddClick = (e) => {
        uiCtx.setAny({
            dialog_visible: true,
            dialog_active_tab: DialogTabList.AddShortkey
        })
    }

    const handleChangeInSearch = (e) => {
        skCtx.searchShortkeys(e.target.value);
    }

    useEffect(() => {
        if(searchBarRef.current) {
            console.log("Focusing")
            searchBarRef.current.focus();
        }
    }, [uiCtx.sidemenu_active]);

    return (
        <>
            <SidebarHeader />
            <SidebarContent>

                <div className="skeys-hdr-container">
                    <div>
                        <Input ref={searchBarRef} autoFocus={true} onChange={handleChangeInSearch} className={'--block-size'} htmlType={"search"} placeholder="Search for Shortkeys and Keywords" icon={null}>
                            <SearchIcon style={{ marginRight: 8 }} />
                        </Input>
                    </div>
                    <div className="--auto-w">
                        <button
                            onClick={handleAddClick}
                            className="btnIco icoB">
                            <span>
                                <AddIcon />
                            </span>
                        </button>
                    </div>
                </div>

                <div className="skeys-wrapper">

                    <div className="vS10"></div>

                    {skCtx.currentData.map((sk) => {
                        return (
                            <Shortkey key={sk.id} title={sk.shortkey} link={sk.url} favicon={sk.favicon} skey={sk} />
                        );
                    })}

                </div>

            </SidebarContent>
        </>
    );

}