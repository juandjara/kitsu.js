/* eslint no-console: 0 */
const Kitsu = require('../index');
const kitsu = new Kitsu();

kitsu.searchAnime('One Piece')
	.then(result => console.log(result))
	.catch(err => console.error(err));
