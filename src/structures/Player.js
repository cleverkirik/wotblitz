const PlayerStatisticsAll = require("./PlayerStatisticsAll");
const PlayerStatisticsRating = require("./PlayerStatisticsRating");
const PlayerPrivateData = require("./PlayerPrivateData");

class Player {
    constructor(client, data, realm) {
        this.client = client; 
        this.accountID = data.account_id;
        this.createdAt = data.created_at;
        this.updatedAt = data.updated_at;
        this.private = new PlayerPrivateData(client, data.private, realm);
        this.realm = realm;
        this.lastBattleTime = data.last_battle_time;
        this.nickname = data.nickname;
        this.statistics = {
            all: new PlayerStatisticsAll(data.statistics.all),
            clan: new PlayerStatisticsAll(data.statistics.clan),
            rating: (!data.statistics.rating) ? undefined : new PlayerStatisticsRating(data.statistics.rating),
        }
    }

    async getAchievments(options) {
        return await this.client.api.methods.getPlayerAchievments(this.accountID, this.realm, options);
    }
    async getClanData(options) {
        return await this.client.api.methods.getPlayerClanData(this.accountID, this.realm, options);
    }
    async getTankStats(options) {
        return await this.client.api.methods.getTankStats(this.accountID, this.realm, options);
    }
}

module.exports = Player;