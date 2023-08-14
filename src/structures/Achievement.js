class Achievement {
    constructor(data) {
        this.achievementID = data.achievement_id;
        this.condition = data.condition;
        this.description = data.description;
        this.image = data.image;
        this.imageBig = data.image_big;
        this.name = data.name;
        this.order = data.order;
        this.section = data.section;
        this.options = (data.options) ? {
            description: data.options.description,
            image: data.options.image,
            imageBig: data.options.image_big,
            name: data.options.name,
        } : null;
    }
}

module.exports = Achievement;