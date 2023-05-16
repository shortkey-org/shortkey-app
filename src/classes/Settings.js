class Settings {
    static KEY = 'settings';

    static getSettings() {
        const settings = localStorage.getItem(Settings.KEY);
        return settings ? JSON.parse(settings) : {};
    }

    static saveSettings(newSettings) {
        const settings = Settings.getSettings();
        const updatedSettings = { ...settings, ...newSettings };
        localStorage.setItem(Settings.KEY, JSON.stringify(updatedSettings));
    }

    static getInstantLauncher() {
        const settings = Settings.getSettings();
        return settings.instantLauncher ?? true;
    }

    static setInstantLauncher(value) {
        Settings.saveSettings({ instantLauncher: value });
    }

    static getAddNewShortkey() {
        const settings = Settings.getSettings();
        return settings.addNewShortkey ?? true;
    }

    static setAddNewShortkey(value) {
        Settings.saveSettings({ addNewShortkey: value });
    }

    static getHideProductHunt() {
        const settings = Settings.getSettings();
        return settings.hideProductHunt ?? false;
    }

    static setHideProductHunt(value) {
        Settings.saveSettings({ hideProductHunt: value });
    }

    static getMinimalistic() {
        const settings = Settings.getSettings();
        return settings.minimalistic ?? false;
    }

    static setMinimalistic(value) {
        Settings.saveSettings({ minimalistic: value });
    }

    static getEnableBackgroundPicture() {
        const settings = Settings.getSettings();
        return settings.enableBackgroundPicture ?? false;
    }

    static setEnableBackgroundPicture(value) {
        Settings.saveSettings({ enableBackgroundPicture: value });
    }

    static getBackgroundPicture() {
        const settings = Settings.getSettings();
        return settings.backgroundPicture ?? '';
    }

    static setBackgroundPicture(value) {
        Settings.saveSettings({ backgroundPicture: value });
    }

    static initInstantLauncher(enabled) {
        const settings = JSON.parse(localStorage.getItem(Settings.KEY)) || {};
        if (!settings.hasOwnProperty("instantLauncher")) {
            settings.instantLauncher = enabled;
            localStorage.setItem(Settings.KEY, JSON.stringify(settings));
        }
    }

    static initAddNewShortkey(enabled) {
        const settings = JSON.parse(localStorage.getItem(Settings.KEY)) || {};
        if (!settings.hasOwnProperty("addNewShortkey")) {
            settings.addNewShortkey = enabled;
            localStorage.setItem(Settings.KEY, JSON.stringify(settings));
        }
    }

    static initHideProductHunt(enabled) {
        const settings = JSON.parse(localStorage.getItem(Settings.KEY)) || {};
        if (!settings.hasOwnProperty("hideProductHunt")) {
            settings.hideProductHunt = enabled;
            localStorage.setItem(Settings.KEY, JSON.stringify(settings));
        }
    }

    static initMinimalistic(enabled) {
        const settings = JSON.parse(localStorage.getItem(Settings.KEY)) || {};
        if (!settings.hasOwnProperty("minimalistic")) {
            settings.minimalistic = enabled;
            localStorage.setItem(Settings.KEY, JSON.stringify(settings));
        }
    }

    static initEnableBackgroundPicture(enabled) {
        const settings = JSON.parse(localStorage.getItem(Settings.KEY)) || {};
        if (!settings.hasOwnProperty("enableBackgroundPicture")) {
            settings.enableBackgroundPicture = enabled;
            localStorage.setItem(Settings.KEY, JSON.stringify(settings));
        }
    }

    static initBackgroundPicture(picUrl) {
        const settings = JSON.parse(localStorage.getItem(Settings.KEY)) || {};
        if (!settings.hasOwnProperty("backgroundPicture")) {
            settings.backgroundPicture = picUrl;
            localStorage.setItem(Settings.KEY, JSON.stringify(settings));
        }
    }
}

export default Settings;