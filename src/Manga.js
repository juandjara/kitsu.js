class Manga {
	constructor(data) {
		this.id = data.id;
		this.type = data.type;
		this.slug = data.attributes.slug;
		this.synopsis = data.attributes.synopsis;
		this.titles = {
			en: data.attributes.titles.en,
			enJp: data.attributes.titles.en_jp,
			canonicalTitle: data.attributes.canonical_title,
			abbreviatedTitles: data.attributes.abbreviatedTitles
		};
		this.averageRating = data.attributes.averageRating;
		this.ratingFrequencies = data.attributes.ratingFrequencies;
		this.userCount = data.attributes.userCount;
		this.favoritesCount = data.attributes.favoritesCount;
		this.startDate = data.attributes.startDate;
		this.endDate = data.attributes.endDate;
		this.popularityRank = data.attributes.popularityRank;
		this.ratingRank = data.attributes.ratingRank;
		this.ageRating = data.attributes.ageRating;
		this.ageRatingGuide = data.attributes.ageRatingGuide;
		this.subType = data.attributes.subtype;
		this.posterImage = data.attributes.posterImage;
		this.coverImage = data.attributes.coverImage;
		this.chapterCount = data.attributes.chapterCount;
		this.volumeCount = data.attributes.volumeCount;
		this.serialization = data.attributes.serialization;
		this.mangaType = data.attributes.mangaType;
	}

	get url() {
		return `https://kitsu.io/manga/${this.id}/`;
	}
}

module.exports = Manga;
