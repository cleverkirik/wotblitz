class SearchedClan {
    constructor(client, data, realm) {
        this.client = client;
        this.clanID = data.clan_id;
        this.createdAt = data.created_at;
        this.membersCount = data.members_count;
        this.name = data.name;
        this.tag = data.tag;
        this.realm = realm;
    }
    async getClan(options) {
        return await this.client.api.methods.getClan(this.clanID, this.realm, options);
    }
}

module.exports = SearchedClan;