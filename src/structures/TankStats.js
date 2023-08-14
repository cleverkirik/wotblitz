const TankStatisticsAll = require('./TankStatisticsAll')

class TankStats {
    constructor(client, realm, data) {
        this.client = client;
        this.realm = realm;
        this.accountID = data.account_id;
        this.battleLifeTime = data.battle_life_time;
        this.inGarageUpdated = data.in_garage_updated;
        this.lastBattleTime = data.last_battle_time;
        this.markOfMastery = data.mark_of_mastery;
        this.maxFrags = data.max_frags;
        this.maxXP = data.max_xp;
        this.tankID = data.tank_id;
        this.inGarage = data.in_garage;
        this.all = new TankStatisticsAll(data.all);
    }

    async getTank(options) {
        (options) ? options.tankID = this.tankID : options = {tankID: this.tankID};
        return await this.client.api.methods.getTanks(options);
    }

    async getPlayer(options) {
        return await this.client.api.methods.getPlayer(this.accountID, this.realm, options);
    }
}

module.exports = TankStats;