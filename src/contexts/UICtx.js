import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState
} from 'react';

export const DialogTabList = {
    Start: "dStart",
    Cookies: "dCookies",
    Terms: "dTerms",
    Privacy: "dPrivacy",
    ViewShortkey: "dViewShortkey",
    AddShortkey: "dAddShortkey",
    EditShortkey: "dEditShortkey",
    Loading: "dLoading"
}

const initialState = {
    initialized: false,
    sidemenu_active: false,
    sidemenu_fallback_active: false,
    sidemenu_close_on_outer_click: true,
    sidemenu_tab: null,
    sidemenu_last_tab: null,
    dialog_visible: false,
    dialog_active_tab: null,
    data: {},
    isOnline: navigator.onLine
};


const handlers = {
    SHOW_SIDEBAR_FALLBACK: (state, action) => {
        return {
            ...state,
            sidemenu_fallback_active: true
        };
    },
    SHOW_SIDEBAR: (state, action) => {
        return {
            ...state,
            sidemenu_active: true
        };
    },
    HIDE_SIDEBAR_FALLBACK: (state, action) => {
        return {
            ...state,
            sidemenu_fallback_active: false
        };
    },
    HIDE_SIDEBAR: (state, action) => {
        return {
            ...state,
            sidemenu_active: false
        };
    },
    CHANGE_TAB: (state, action) => {
        return {
            ...state,
            sidemenu_tab: action.payload.tab,
            sidemenu_last_tab: state.sidemenu_tab
        };
    },
    ANY: (state, action) => {
        return {
            ...state,
            ...action.payload
        };
    },
    DATA: (state, action) => {
        return {
            ...state,
            data: {
                ...state.data || {},
                ...action.payload.data
            }
        }
    },
    ONLINE: (state, action) => {
        return {
            ...state,
            isOnline: action.payload.isOnline
        }
    }
}


const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);


const UIContext = createContext({
    ...initialState,
    setSidemenuVisibility: (status) => { },
    setSidemenuTab: (tab) => { },
    setData: (data) => { },
    setAny: (payload) => {}
});


function UIProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        if((state.dialog_active_tab === DialogTabList.AddShortkey || state.dialog_active_tab === DialogTabList.EditShortkey) && state.dialog_visible) {
            if(state.sidemenu_close_on_outer_click) {
                dispatch({
                    type: 'ANY',
                    payload: {
                        sidemenu_close_on_outer_click: false
                    }
                })
            }
        }
        else {
            if(!state.sidemenu_close_on_outer_click) {
                dispatch({
                    type: 'ANY',
                    payload: {
                        sidemenu_close_on_outer_click: true
                    }
                })
            }
        }
    }, [state]);

    const setSidemenuTab = async (tab) => {
        dispatch({
            type: 'CHANGE_TAB',
            payload: {
                tab: tab
            }
        });
    }

    const setSidemenuVisibility = async (status) => {
        if (status) {
            dispatch({
                type: 'SHOW_SIDEBAR_FALLBACK'
            });
            await setTimeout(() => {
                dispatch({
                    type: 'SHOW_SIDEBAR'
                });
            }, 20);
        }
        else {
            dispatch({
                type: 'HIDE_SIDEBAR'
            });
            await setTimeout(() => {
                dispatch({
                    type: 'HIDE_SIDEBAR_FALLBACK'
                });
            }, 100);
        }
    }

    const setData = (data) => {
        dispatch({
            type: "DATA",
            payload: {
                data: {
                    ...data
                }
            }
        });
    }

    const setAny = (data) => {
        dispatch({
            type: "ANY",
            payload: {
                ...data
            }
        });
    }

    return (
        <UIContext.Provider
            value={{
                ...state,
                setSidemenuVisibility,
                setSidemenuTab,
                setData,
                setAny
            }}>
            {children}
        </UIContext.Provider>
    );

}

const useUI = () => useContext(UIContext);

export {
    UIContext,
    UIProvider,
    useUI
};