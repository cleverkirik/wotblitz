class SearchedPlayer {
    constructor(client, data, realm) {
        this.client = client;
        this.id = data.account_id;
        this.nickname = data.nickname;
        this.realm = realm;
    }
    async getPlayer(options) {
        return await this.client.api.methods.getPlayer(this.id, this.realm, options);
    }
}

module.exports = SearchedPlayer;