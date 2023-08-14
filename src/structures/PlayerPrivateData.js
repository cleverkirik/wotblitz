class PlayerPrivateData {
    constructor(client, data, realm) {
        this.client = client;
        this.realm = realm;
        if(data) {
            this.restrictions = {
                chatBanTime: data.restrictions.chat_ban_time,
            };
            this.gold = data.gold;
            this.freeXP = data.free_xp;
            this.banTime = data.ban_time;
            this.isPremium = data.is_premium;
            this.credits = data.credits;
            this.premiumExpiresAt = data.premium_expires_at;
            this.battleLifeTime = data.battle_life_time;
            this.banInfo = data.ban_info;
            this.contactsID = data.grouped_contacts;
        }
    }
    async getPlayerPrivateDataContacts() {
        if(this.contactsID) {
            let c = this.contactsID;
            return await this.client.api.methods.getPlayerPrivateDataContacts(c, this.realm);
        } else return null;
    }
}

module.exports = PlayerPrivateData;