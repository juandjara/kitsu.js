const Kitsu = require('../index');
const kitsu = new Kitsu();

/* global test, expect */
test('Fetching user information with ID', () =>
	kitsu.getUser('153406')
		.then(res => {
			expect(res.id).toBeTruthy();
			expect(res.name).toBe('iCrawl');
		})
);
