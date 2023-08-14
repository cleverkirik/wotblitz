const BattleStatistics = require("./BattleStatistics");

class PlayerStatisticsRating extends BattleStatistics {
    constructor(data) {
        super(data);
        this.calibrationBattlesLeft = data.calibration_battles_left;
        this.currentSeason = data.current_season;
        this.isRecalibration = data.is_recalibration;
        this.mmRating = data.mm_rating;
        this.recalibrationStartTime = data.recalibration_start_time;
    }
}

module.exports = PlayerStatisticsRating;