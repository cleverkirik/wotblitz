class Clan {
    constructor(client, data, realm) {
        this.client = client;
        this.clanID = data.clan_id;
        this.createdAt = data.created_at;
        this.creatorID = data.creator_id;
        this.creatorName = data.creator_name;
        this.description = data.description;
        this.emblemSetID = data.emblem_set_id;
        this.isClanDisbanded = data.is_clan_disbanded;
        this.leaderID = data.leader_id;
        this.leaderName = data.leader_name;
        this.membersCount = data.members_count;
        this.membersIDs = data.members_ids;
        this.motto = data.motto;
        this.name = data.name;
        this.oldName = data.old_name;
        this.oldTag = data.old_tag;
        this.recruitingPolicy = data.recruiting_policy;
        this.renamedAt = data.renamed_at;
        this.tag = data.tag;
        this.updatedAt = data.updated_at;
        this.members = (data.members) ? client.api.methods.getClanMembers(data.members, realm) : null;
        this.recruitingOptions = (data.recruiting_options) ? {
            averageBattlesPerDay: data.recruiting_options.average_battles_per_day,
            averageDamage: data.recruiting_options.average_damage,
            battles: data.recruiting_options.battles,
            vehiclesLevel: data.recruiting_options.vehicles_level,
            winsRatio: data.recruiting_options.wins_ratio,
        } : null;
        this.realm = realm;
    }
    async getCreator(options) {
        return await this.client.api.methods.getPlayer(this.creatorID, this.realm, options);
    }

    async getLeader(options) {
        return await this.client.api.methods.getPlayer(this.leaderID, this.realm, options);
    }
}

module.exports = Clan;