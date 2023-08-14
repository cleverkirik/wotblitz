class ClanMember {
    constructor(client, data, realm) {
        this.client = client;
        this.accountID = data.account_id;
        this.accountName = data.account_name;
        this.joinedAt = data.joined_at;
        this.role = data.role;
        this.realm = realm;
    }
    async getPlayer(options) {
        return await this.client.api.methods.getPlayer(this.id, this.realm, options);
    }
}

module.exports = ClanMember;