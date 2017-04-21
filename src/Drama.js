class Drama {
	constructor(id, data) {
		this.id = data.id;
		this.slug = data.attributes.slug;
		this.synposis = data.attributes.synposis;
		this.titles = {
			en: data.attributes.titles.en,
			enJp: data.attributes.titles.en_jp,
			canonicalTitle: data.attributes.canonical_title,
			abbreviatedTitles: data.attributes.abbreviatedTitles
		};
		this.averageRating = data.attributes.averageRating;
		this.ratingFrequencies = data.attributes.ratingFrequencies;
		this.startDate = data.attributes.startDate;
		this.endDate = data.attributes.endDate;
		this.posterImage = data.attributes.posterImage;
		this.coverImage = data.attributes.coverImage;
		this.dramaType = data.attributes.dramaType;
	}

	get url() {
		return `https://kitsu.io/drama/${this.id}/`;
	}
}

module.exports = Drama;
