import { Outlet, useLocation, useRoutes } from "react-router";
import MainPage from "../pages/main";

export function Router() {

    return useRoutes([
        {
            path: '/',
            element: <MainPage />
        },
        {
            path: '*',
            element: <></>
        }
    ]);

}