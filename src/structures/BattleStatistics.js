class BattleStatistics {
    constructor(data) {
        this.spotted = data.spotted;
        this.hits = data.hits;
        this.frags = data.frags;
        this.wins = data.wins;
        this.losses = data.losses;
        this.capturePoints = data.capture_points;
        this.battles = data.battles;
        this.damageDealt = data.damage_dealt;
        this.damageReceived = data.damage_received;
        this.shots = data.shots;
        this.frags8p = data.frags8p;
        this.xp = data.xp;
        this.winAndSurvived = data.win_and_survived;
        this.survivedBattles = data.survived_battles;
        this.droppedCapturePoints = data.dropped_capture_points;
    }
}

module.exports = BattleStatistics;