const ApiClient = require("./ApiClient");

class Client {
    constructor(token, realm) {
        this.token = token;
        this.realm = realm;
        this.api = new ApiClient(this);
    }
    async searchPlayers(search, options) {
        return this.api.methods.searchPlayers(search, options);
    }
    async searchClans(options) {
        return this.api.methods.searchClans(options);
    }

    async getTanks(options) {
        return this.api.methods.getTanks(options);
    }
}

module.exports = Client;