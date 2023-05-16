import { v4 as uuid } from 'uuid';

export const ShortkeyStatus = {
    Local: 'local',
    InSync: 'synced',
    SyncNeeded: 'unsynced'
}

class ShortkeyManager {
    static KEY = 'shortkeys';
    static INIT_KEY = 'initialized';

    constructor() {
        let initData = localStorage.getItem(ShortkeyManager.INIT_KEY);
        if (!initData) {
            this.setup();
        }

        return true;
    }

    setup() {
        localStorage.setItem(ShortkeyManager.INIT_KEY, new Date());
        DefaultShortkeys.map((sk) => {
            ShortkeyManager.addShortkey({
                id: uuid(),
                accountId: null,
                shortkey: sk.shortkey,
                favicon: sk.favicon,
                url: sk.url,
                tags: sk.tags,
                status: ShortkeyStatus.Local
            });
        })
    }

    static addShortkey(shortkey) {
        const shortkeys = this.getShortkeys();
        shortkeys.push(shortkey);
        localStorage.setItem(this.KEY, JSON.stringify(shortkeys));
    }

    static updateShortkey(shortkey) {
        const shortkeys = this.getShortkeys();
        const index = shortkeys.findIndex((s) => s.id === shortkey.id);
        if (index >= 0) {
            shortkeys[index] = shortkey;
            localStorage.setItem(this.KEY, JSON.stringify(shortkeys));
        }
    }

    static deleteShortkey(shortkey) {
        const shortkeys = this.getShortkeys();
        const index = shortkeys.findIndex((s) => s.id === shortkey.id);
        if (index >= 0) {
            shortkeys.splice(index, 1);
            localStorage.setItem(this.KEY, JSON.stringify(shortkeys));
        }
    }

    static getShortkeys() {
        const shortkeys = localStorage.getItem(this.KEY);
        return shortkeys ? JSON.parse(shortkeys) : [];
    }

    static getShortkeys(offset = 0, limit = 10) {
        const shortkeys = localStorage.getItem(this.KEY);
        const parsedShortkeys = shortkeys ? JSON.parse(shortkeys) : [];

        const endIndex = offset + limit;
        const paginatedShortkeys = parsedShortkeys.slice(offset, endIndex);
        return paginatedShortkeys;
    }

    static searchShortkeys(query, offset = 0, limit = 10) {
        const shortkeys = this.getShortkeys();
        const filteredShortkeys = shortkeys.filter(shortkey => {
            const matchShortkey = shortkey.shortkey.toLowerCase().includes(query.toLowerCase());
            const matchTag = shortkey.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
            return matchShortkey || matchTag;
        });

        const startIndex = offset * limit;
        const endIndex = startIndex + limit;
        const paginatedShortkeys = filteredShortkeys.slice(startIndex, endIndex);

        return paginatedShortkeys;
    }

    static findShortkeys(query) {
        const shortkeys = this.getShortkeys();
        const matchedShortkeys = shortkeys.filter((shortkey) => {
            const firstLetters = shortkey.shortkey.substr(0, query.length).toLowerCase();
            return firstLetters === query.toLowerCase();
        });
        const topMatches = matchedShortkeys.slice(0, 6); // Limit to the top 6 matches
        return topMatches;
    }


}

export const DefaultShortkeys = [
    {
        shortkey: "Google",
        url: "https://google.com",
        favicon: "https://f.start.me/google.com",
        tags: ["google"]
    },
    {
        shortkey: "Facebook",
        url: "https://facebook.com",
        favicon: "https://f.start.me/facebook.com",
        tags: ["facebook"]
    }
]

export default ShortkeyManager;