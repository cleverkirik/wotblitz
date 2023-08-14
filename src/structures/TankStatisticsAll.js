const BattleStatistics = require("./BattleStatistics");

class TankStatisticsAll extends BattleStatistics {
    constructor(data) {
        super(data);
        this.maxXP = data.max_xp;
        this.maxFrags = data.max_frags;
    }
}

module.exports = TankStatisticsAll;