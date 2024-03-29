const fs = require('fs');
const jsesc = require('jsesc');

function readJSON(path) {
	return JSON.parse(fs.readFileSync(path, 'utf-8'));
}

function objectToMap(object) {
	return new Map(
		Object.entries(object).map(([ key, value ]) => {
			return [ Number(key), value ];
		})
	);
}

module.exports = {
	labels: jsesc(readJSON('data/labels.json'), { compact: false }),
	encoded: jsesc(readJSON('data/encoded.json'), { wrap: true, numbers: 'hexadecimal' }),
	decoded: jsesc(readJSON('data/decoded.json'), { wrap: true }),
	indexByCodePoint: jsesc(objectToMap(readJSON('data/index-by-code-point.json')), { compact: false }),
	indexByPointer: jsesc(objectToMap(readJSON('data/index-by-pointer.json')), { compact: false }),
	version: readJSON('package.json').version,
};
