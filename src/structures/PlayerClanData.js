class PlayerClanData {
    constructor(data) {
        if(data) {
            this.accountID = data.account_id;
            this.accountName = data.account_name;
            this.clanID = data.clan_id;
            this.joinedAt = data.joined_at;
            this.role = data.role;
            this.clan = (data.clan) ? {
                clanID: data.clan.clan_id,
                createdAt: data.clan.created_at,
                emblemSetID: data.clan.emblem_set_id,
                membersCount: data.clan.members_count,
                name: data.clan.name,
                tag: data.clan.tag,
            } : null;
        }
    }
}

module.exports = PlayerClanData;