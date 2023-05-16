const getFromEnv = (key) => process.env[key];

export const apiEnv = {
    host: (getFromEnv("REACT_APP_CONFIG_API_HOST") || '').trim(),
    port: (getFromEnv("REACT_APP_CONFIG_API_PORT") || '').trim()
};

export const platformList = {
    'web': '0',
    'chrome': '1'
};

export const appEnv = {
    mode: (getFromEnv("REACT_APP_CONFIG_PLATFORM") || '').trim()
};

export function getApiBase() {
    if (!apiEnv.port) {
        return `${apiEnv.host}`;
    }

    return `${apiEnv.host}:${apiEnv.port}`;
}

export function getAppPlatform() {
    return appEnv.mode;
}

export function isChrome() {
    return appEnv.mode === platformList.chrome;
}

export function isWeb() {
    return appEnv.mode === platformList.web;
}