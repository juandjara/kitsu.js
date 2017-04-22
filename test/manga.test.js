const Kitsu = require('../index');
const kitsu = new Kitsu();

/* global test, expect */
test('Fetching manga information with search', () =>
	kitsu.searchManga('One Piece')
		.then(res => {
			expect(res[0].id).toBeTruthy();
			expect(res[0].type).toBe('manga');
		})
);

test('Fetching manga information with ID', () =>
	kitsu.getManga('38')
		.then(res => {
			expect(res.id).toBeTruthy();
			expect(res.type).toBe('manga');
		})
);
