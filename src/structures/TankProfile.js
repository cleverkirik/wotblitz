class TankProfile {
    constructor(data) {
        this.battleLevelRangeMax = data.battle_level_range_max;
        this.battleLevelRangeMin = data.battle_level_range_min;
        this.firepower = data.firepower;
        this.hp = data.hp;
        this.hullHP = data.hull_hp;
        this.hullWeight = data.hull_weight;
        this.isDefault = data.is_default;
        this.maneuverability = data.maneuverability;
        this.maxAmmo = data.max_ammo;
        this.maxWeight = data.max_weight;
        this.profileID = data.profile_id;
        this.protection = data.protection;
        this.shotEffiency = data.shot_effiency;
        this.signalRange = data.signal_range;
        this.speedBackward = data.speed_backward;
        this.speedForward = data.speed_forward;
        this.suspensionID = data.suspensionID;
        this.turretID = data.turret_id;
        this.weight = data.weight;
        this.armor = {
            hull: {
                front: data.armor.hull.front,
                rear: data.armor.hull.rear,
                sides: data.armor.hull.sides,
            },
            turret: {
                front: data.armor.hull.front,
                rear: data.armor.hull.rear,
                sides: data.armor.hull.sides,
            },
        };
        this.engine = {
            id: data.engine_id,
            fireChance: data.engine.fire_chance,
            name: data.engine.name,
            power: data.engine.power,
            tier: data.engine.tier,
            weight: data.engine.weight,
        }
        this.gun = {
            id: data.gun_id,
            aimTime: data.gun.aim_time,
            caliber: data.gun.caliber,
            clipCapacity: data.gun.clip_capacity,
            
        }
    }
}

module.exports = TankProfile;