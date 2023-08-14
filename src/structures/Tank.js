const TankProfile = require("./TankProfile");

class Tank {
    constructor(data) {
        this.description = data.description;
        this.engines = data.engines;
        this.guns = data.guns;
        this.isPremium = data.is_premium;
        this.name = data.name;
        this.nation = data.nation;
        this.nextTanks = data.next_tanks;
        this.pricesXP = data.prices_xp;
        this.suspensions = data.suspensions;
        this.tankID = data.tank_id;
        this.tier = data.tier;
        this.turrets = data.turrets;
        this.type = data.type;
        this.cost = {
            priceCredit: (data.cost) ? data.cost.price_credit : null,
            priceGold: (data.cost) ? data.cost.price_gold : null,
        };
        this.defaultProfile = new TankProfile(data.default_profile);
        this.images = {
            normal: data.images.normal,
            preview: data.images.preview,
        }
    }
}

module.exports = Tank;