const BattleStatistics = require("./BattleStatistics");

class PlayerStatisticsAll extends BattleStatistics {
    constructor(data) {
        super(data);
        this.maxFragsTankID = data.max_frags_tank_id;
        this.maxXP = data.max_xp;
        this.maxXPTankID = data.max_xp_tank_id;
        this.maxFrags = data.max_frags;
    }
}

module.exports = PlayerStatisticsAll;