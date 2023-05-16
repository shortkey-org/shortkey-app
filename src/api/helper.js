import axios from 'axios';
import { getApiBase } from '../env';

const axiosInstance = axios.create({
    baseURL: getApiBase(),
});

export const axiosDefaultConfig = {
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json; charset=utf-8',
    },
};

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (axios.isCancel(error)) {
            console.log("request canceled/")
        }
        else {
            console.error(error);
            // throw new HttpError(error.status, error.response && error.response.data.message || 'Unexpected error.');
        }
        return Promise.reject((error.response && error.response) || error);
        // return Promise.reject((error.response && error.response) || 'Something went wrong');
    },
);

/**
 * Is error that needs to trigger chrome offline mode?
 */
export const isNetworkError = (response) => {
    if (response && !response.status) {
        return true;
    }
    return false;
}

export default axiosInstance;
