const Kitsu = require('../index');
const kitsu = new Kitsu();

/* global test, expect */
test('Fetching anime information with search', () =>
	kitsu.searchAnime('One Piece')
		.then(res => {
			expect(res[0].id).toBeTruthy();
			expect(res[0].type).toBe('anime');
		})
);

test('Fetching anime information with ID', () =>
	kitsu.getAnime('12')
		.then(res => {
			expect(res.id).toBeTruthy();
			expect(res.type).toBe('anime');
		})
);
