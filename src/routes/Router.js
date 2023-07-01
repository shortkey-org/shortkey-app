import { Outlet, useLocation, useRoutes } from "react-router";
import MainPage from "../pages/main";
import AuthPage from "../pages/auth";

export function Router() {

    return useRoutes([
        {
            path: '/',
            element: <MainPage />,
        },
        {
            path: '/auth',
            element: <AuthPage />
        },
        {
            path: '*',
            element: <></>
        }
    ]);

}