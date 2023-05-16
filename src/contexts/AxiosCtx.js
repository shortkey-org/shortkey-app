import { useMemo } from "react";
import { useCookies } from "react-cookie";
import { getBearerTokenFormat } from "../api";
import axiosInstance from "../api/helper";
import { CookiesArray, CookiesList } from "../constants/cookies";

const Axios = ({ children }) => {
    const [cookies] = useCookies(CookiesArray);

    useMemo(() => {
        axiosInstance.interceptors.request.use(
            (config) => {
                const token = cookies[CookiesList.AccessToken];
                if (token) {
                    config.headers['Authorization'] = getBearerTokenFormat(token);
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            },
        );

        /** add refreshTk here */
    }, []);

    return children;
};

export default Axios;
