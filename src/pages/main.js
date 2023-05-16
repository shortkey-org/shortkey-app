import { useEffect, useState } from "react";
import Page from "../components";
import Header from "../components/header";
import { SettingKey, useAuth } from "../contexts/AuthCtx";
import { useSk } from "../contexts/SkCtx";
import AddIcon from "../icons/Add";
import EditIcon from "../icons/Edit";
import MenuIcon from "../icons/Menu";
import Sidebar from "../sidebar";

export default function MainPage() {

    const authCtx = useAuth();
    const skCtx = useSk();

    const [focused, setFocused] = useState(false);
    // const [searchActive, setSearchActive] = useState(false);
    // const [showCollect, setShowCollect] = useState(false);

    const handleInstantLauncherChange = (e) => {
        console.log("Instant launcher changed.");
        authCtx.changeSetting(SettingKey.instantLauncher, e.target.checked);
    }

    const handleFocus = (e) => {
        setFocused(true);
    }

    const handleBlur = (e) => {
        setFocused(false);
    }

    const handleKeyUp = (e) => {
        // if(e.target.value > 0) {
        //     console.log("AS")
        //     setSearchActive(true);
        // }
        // else
        // {
        //     console.log("Am")
        //     setSearchActive(false);
        // }
        skCtx.findShortkeys(e.target.value);
    }
    

    const handleEditClick = (i) => (e) => {
        console.log("Edit")
    }

    const handleCollectClick = (e) => {
        console.log("Collect clicked");
    }

    return (
        <>

            <Page
                title="Shortkey">

                <Header />

                <div
                    className={("shortkey-search-section")+(focused ? " mobileFindBar" : "")}>
                    <div className="cFlex col jstart acenter">
                        {!authCtx.setting.minimalistic && <div className="cW100p mB30 cFlex row jcenter acenter logoContainer">
                            <svg className="logo" width="479" height="131" viewBox="0 0 479 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1109_1241)">
                                    <path d="M58.5777 23.7215C55.4516 22.1162 52.0299 20.7221 48.3124 19.5393C44.595 18.3565 40.962 17.7651 37.4135 17.7651C32.5132 17.7651 28.5845 18.9057 25.6275 21.1868C22.7549 23.468 21.3186 26.5096 21.3186 30.3115C21.3186 33.1841 22.248 35.6342 24.1067 37.6619C25.9654 39.6051 28.4156 41.2949 31.4571 42.7312C34.4987 44.1675 37.667 45.5193 40.962 46.7866C43.8346 47.8849 46.6649 49.11 49.453 50.4618C52.2411 51.8136 54.7335 53.5034 56.9302 55.5311C59.2113 57.5588 60.9856 60.0512 62.2529 63.0082C63.6047 65.9653 64.2806 69.6405 64.2806 74.0339C64.2806 78.8497 63.0555 83.243 60.6054 87.214C58.2397 91.1849 54.818 94.3109 50.3401 96.5921C45.8623 98.8733 40.5396 100.014 34.372 100.014C30.3165 100.014 26.4301 99.5492 22.7127 98.6198C19.0797 97.6904 15.7002 96.5076 12.5741 95.0713C9.44808 93.5505 6.65999 91.9875 4.20985 90.3823L9.6593 80.7507C11.687 82.1869 14.0104 83.581 16.6295 84.9328C19.2487 86.2001 21.9945 87.2562 24.8671 88.1011C27.7397 88.8615 30.5278 89.2417 33.2314 89.2417C36.104 89.2417 38.9343 88.7347 41.7224 87.7209C44.595 86.6226 46.9606 84.975 48.8193 82.7784C50.6781 80.5817 51.6074 77.6669 51.6074 74.0339C51.6074 70.9078 50.7626 68.331 49.0728 66.3033C47.4675 64.1911 45.3131 62.4168 42.6095 60.9805C39.9059 59.4598 37.0333 58.108 33.9918 56.9251C31.1192 55.8268 28.2043 54.644 25.2473 53.3766C22.2902 52.0248 19.5444 50.4196 17.0097 48.5608C14.4751 46.6176 12.4474 44.252 10.9266 41.4639C9.40584 38.6758 8.64545 35.2963 8.64545 31.3254C8.64545 26.5096 9.78603 22.3274 12.0672 18.7789C14.4329 15.146 17.6434 12.3156 21.6988 10.2879C25.7542 8.17573 30.401 7.03514 35.6393 6.86617C41.5534 6.86617 46.7494 7.58431 51.2272 9.0206C55.7896 10.4569 59.8028 12.2311 63.2667 14.3433L58.5777 23.7215ZM82.027 99V0.909784H93.5595V58.6994L93.3061 56.5449C95.0803 53.0809 97.7839 50.2084 101.417 47.9272C105.134 45.646 109.485 44.5054 114.47 44.5054C119.455 44.5054 123.51 45.984 126.636 48.941C129.847 51.8136 131.495 55.5733 131.579 60.2201V99H119.666V64.4023C119.582 61.5297 118.737 59.2063 117.132 57.4321C115.611 55.5733 113.203 54.644 109.908 54.644C106.866 54.644 104.12 55.5311 101.67 57.3053C99.2202 58.9951 97.277 61.3185 95.8407 64.2756C94.4889 67.2326 93.813 70.6121 93.813 74.4141V99H82.027ZM147.513 72.2596C147.513 67.0214 148.739 62.2901 151.189 58.0657C153.723 53.8413 157.187 50.5041 161.581 48.0539C165.974 45.6038 170.959 44.3787 176.535 44.3787C182.28 44.3787 187.307 45.6038 191.616 48.0539C195.925 50.5041 199.262 53.8413 201.628 58.0657C203.994 62.2901 205.176 67.0214 205.176 72.2596C205.176 77.4979 203.994 82.2714 201.628 86.5803C199.262 90.8047 195.883 94.142 191.489 96.5921C187.18 99.0422 182.153 100.267 176.408 100.267C170.832 100.267 165.847 99.1267 161.454 96.8456C157.145 94.4799 153.723 91.2271 151.189 87.0872C148.739 82.8629 147.513 77.9203 147.513 72.2596ZM159.3 72.3864C159.3 75.7659 160.06 78.8497 161.581 81.6378C163.101 84.3414 165.129 86.4958 167.664 88.1011C170.283 89.7064 173.156 90.509 176.282 90.509C179.577 90.509 182.491 89.7064 185.026 88.1011C187.645 86.4958 189.673 84.3414 191.109 81.6378C192.545 78.8497 193.264 75.7659 193.264 72.3864C193.264 69.0069 192.545 65.9653 191.109 63.2617C189.673 60.4736 187.645 58.2769 185.026 56.6717C182.491 54.9819 179.577 54.137 176.282 54.137C173.071 54.137 170.156 54.9819 167.537 56.6717C165.002 58.3614 162.975 60.6003 161.454 63.3884C160.018 66.092 159.3 69.0914 159.3 72.3864ZM231.653 46.5331L232.794 61.7409L232.16 59.7132C233.512 56.5027 235.455 53.7991 237.99 51.6024C240.609 49.3212 243.313 47.5892 246.101 46.4064C248.973 45.1391 251.466 44.5054 253.578 44.5054L252.944 56.1647C248.973 55.9113 245.467 56.6717 242.426 58.4459C239.468 60.2201 237.103 62.5858 235.329 65.5429C233.639 68.4999 232.794 71.6682 232.794 75.0477V99H221.135V46.5331H231.653ZM273.852 23.468H285.638V46.7866H300.085V56.038H285.638V99H273.852V56.038H264.22V46.7866H273.852V23.468ZM315.341 99V2.68403H321.297V99H315.341ZM332.703 66.8102L355.768 99H348.798L328.521 70.1052L332.703 66.8102ZM319.269 81.0041L318.762 75.0477L349.051 48.4341L352.727 51.6024L319.269 81.0041ZM391.34 100.014C386.186 100.014 381.624 98.8733 377.653 96.5921C373.682 94.3109 370.556 91.2271 368.275 87.3407C366.078 83.3698 364.98 78.9342 364.98 74.0339C364.98 69.2181 366.163 64.8247 368.528 60.8538C370.894 56.8829 374.062 53.7146 378.033 51.3489C382.089 48.9833 386.566 47.8005 391.467 47.8005C397.381 47.8005 402.323 49.5325 406.294 52.9965C410.35 56.4604 413.265 60.9805 415.039 66.5567L371.697 83.2853L369.922 78.9764L409.589 63.5152L408.322 65.2894C406.886 61.9099 404.689 58.9951 401.732 56.5449C398.859 54.0948 395.311 52.8697 391.087 52.8697C387.285 52.8697 383.863 53.7991 380.821 55.6578C377.78 57.5165 375.33 60.0089 373.471 63.135C371.697 66.261 370.81 69.8095 370.81 73.7804C370.81 77.4979 371.654 80.9619 373.344 84.1724C375.118 87.3829 377.569 89.9598 380.695 91.903C383.821 93.8463 387.411 94.8179 391.467 94.8179C394.17 94.8179 396.747 94.3109 399.197 93.2971C401.732 92.2832 403.971 90.9737 405.914 89.3684L408.956 93.6773C406.59 95.536 403.844 97.0568 400.718 98.2396C397.677 99.4224 394.551 100.014 391.34 100.014ZM436.115 122.826L468.431 49.448H474.261L442.325 122.826H436.115ZM447.267 99.5069L423.822 49.448H430.539L451.956 96.3386L447.267 99.5069Z" fill="#532D63" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_1109_1241" x="0.208984" y="0.910156" width="478.053" height="129.914" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1109_1241" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1109_1241" result="shape" />
                                    </filter>
                                </defs>
                            </svg>

                        </div>}
                        <div className="cW100p">
                            <div
                                className="findbar">
                                    <div className="inner-findbar">
                                        <div>
                                            <input onBlur={handleBlur} onKeyUp={handleKeyUp} onFocus={handleFocus} />
                                        </div>
                                        <div className="autoW">
                                            <span className="quickSetting">
                                                <label className="switch">
                                                    <input onChange={handleInstantLauncherChange} type="checkbox" defaultChecked={false}></input>
                                                    <span className="slider round"></span>
                                                </label>
                                            </span>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        {skCtx.queryResults.length > 0 && <div className="cW100p">
                            <div
                                className="results">
                                    <div className="inner-results">

                                        {skCtx.queryResults.map((result) => {
                                            return (
                                                <div key={result.id} className="result">
                                            <div>
                                                <img src={result.favicon} />
                                                <span>{result.shortkey}</span>
                                                <span>{result.url}</span>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={handleEditClick(0)}
                                                    className="btnIco szSmall">
                                                    <span>
                                                        <EditIcon />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                            );
                                        })}

                                    </div>
                            </div>
                        </div>}

                        {skCtx.queryActive && skCtx.queryResults.length < 1 && <div className="w100p" style={{marginTop: 10}}>
                                <button onClick={handleCollectClick} className="btn t2 tc">
                                    <span>
                                        <AddIcon />
                                    </span>
                                    <span>
                                        Collect Shortkey
                                    </span>
                                </button>
                            </div>}

                    </div>
                </div>

                <Sidebar />

            </Page>

        </>
    );

}