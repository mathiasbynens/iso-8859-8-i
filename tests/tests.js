const assert = require('assert');

const iso88598i = require('../iso-8859-8-i.js');

console.log('Testing `iso88598i.encode`…');
assert.strictEqual(
	iso88598i.encode('\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\x0B\f\r\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7F'),
	'\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\x0B\f\r\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7F',
	'U+0000 to U+007F remain unchanged'
);
assert.strictEqual(
	iso88598i.encode('\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8A\x8B\x8C\x8D\x8E\x8F\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9A\x9B\x9C\x9D\x9E\x9F\xA0\xA2\xA3\xA4\xA5\xA6\xA7\xA8\xA9\xD7\xAB\xAC\xAD\xAE\xAF\xB0\xB1\xB2\xB3\xB4\xB5\xB6\xB7\xB8\xB9\xF7\xBB\xBC\xBD\xBE\u2017\u05D0\u05D1\u05D2\u05D3\u05D4\u05D5\u05D6\u05D7\u05D8\u05D9\u05DA\u05DB\u05DC\u05DD\u05DE\u05DF\u05E0\u05E1\u05E2\u05E3\u05E4\u05E5\u05E6\u05E7\u05E8\u05E9\u05EA\u200E\u200F'),
	'\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8A\x8B\x8C\x8D\x8E\x8F\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9A\x9B\x9C\x9D\x9E\x9F\xA0\xA2\xA3\xA4\xA5\xA6\xA7\xA8\xA9\xAA\xAB\xAC\xAD\xAE\xAF\xB0\xB1\xB2\xB3\xB4\xB5\xB6\xB7\xB8\xB9\xBA\xBB\xBC\xBD\xBE\xDF\xE0\xE1\xE2\xE3\xE4\xE5\xE6\xE7\xE8\xE9\xEA\xEB\xEC\xED\xEE\xEF\xF0\xF1\xF2\xF3\xF4\xF5\xF6\xF7\xF8\xF9\xFA\xFD\xFE',
	'Encoding all other symbols in the character set'
);
assert.throws(
	() => {
		iso88598i.encode('\uFFFF');
	},
	Error,
	'Encoding a code point that is invalid for this encoding throws an error in `fatal` mode, which is the implied default for `encode()`'
);
assert.throws(
	() => {
		iso88598i.encode('\uFFFF', { mode: 'fatal' });
	},
	Error,
	'Encoding a code point that is invalid for this encoding throws an error in `fatal` mode'
);
assert.throws(
	() => {
		iso88598i.encode('\uFFFF', { mode: 'FATAL' });
	},
	Error,
	'Mode names are case-insensitive'
);
assert.throws(
	() => {
		iso88598i.encode('\uFFFF', { mode: 'fAtAl' });
	},
	Error,
	'Mode names are case-insensitive'
);
assert.strictEqual(
	iso88598i.encode('\uFFFF', { mode: 'html' }),
	'&#65535;',
	'Encoding a code point that is invalid for this encoding returns an HTML entity in `html` mode'
);
assert.strictEqual(
	iso88598i.encode('\uFFFF', { mode: 'HTML' }),
	'&#65535;',
	'Mode names are case-insensitive'
);
assert.strictEqual(
	iso88598i.encode('\uFFFF', { mode: 'hTmL' }),
	'&#65535;',
	'Mode names are case-insensitive'
);

console.log('Testing `iso88598i.decode`…');
assert.strictEqual(
	iso88598i.decode('\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\x0B\f\r\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7F'),
	'\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\x0B\f\r\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7F',
	'U+0000 to U+007F remain unchanged'
);
assert.strictEqual(
	iso88598i.decode('\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8A\x8B\x8C\x8D\x8E\x8F\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9A\x9B\x9C\x9D\x9E\x9F\xA0\xA2\xA3\xA4\xA5\xA6\xA7\xA8\xA9\xAA\xAB\xAC\xAD\xAE\xAF\xB0\xB1\xB2\xB3\xB4\xB5\xB6\xB7\xB8\xB9\xBA\xBB\xBC\xBD\xBE\xDF\xE0\xE1\xE2\xE3\xE4\xE5\xE6\xE7\xE8\xE9\xEA\xEB\xEC\xED\xEE\xEF\xF0\xF1\xF2\xF3\xF4\xF5\xF6\xF7\xF8\xF9\xFA\xFD\xFE'),
	'\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8A\x8B\x8C\x8D\x8E\x8F\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9A\x9B\x9C\x9D\x9E\x9F\xA0\xA2\xA3\xA4\xA5\xA6\xA7\xA8\xA9\xD7\xAB\xAC\xAD\xAE\xAF\xB0\xB1\xB2\xB3\xB4\xB5\xB6\xB7\xB8\xB9\xF7\xBB\xBC\xBD\xBE\u2017\u05D0\u05D1\u05D2\u05D3\u05D4\u05D5\u05D6\u05D7\u05D8\u05D9\u05DA\u05DB\u05DC\u05DD\u05DE\u05DF\u05E0\u05E1\u05E2\u05E3\u05E4\u05E5\u05E6\u05E7\u05E8\u05E9\u05EA\u200E\u200F',
	'Decoding all other symbols in the character set'
);
assert.strictEqual(
	iso88598i.decode('\uFFFF'),
	'\uFFFD',
	'Decoding a byte that is invalid for this encoding returns U+FFFD in `replacement` mode, which is the implied default for `decode()`'
);
assert.strictEqual(
	iso88598i.decode('\uFFFF', { mode: 'replacement' }),
	'\uFFFD',
	'Decoding a byte that is invalid for this encoding returns U+FFFD in `replacement` mode'
);
assert.strictEqual(
	iso88598i.decode('\uFFFF', { mode: 'REPLACEMENT' }),
	'\uFFFD',
	'Mode names are case-insensitive'
);
assert.strictEqual(
	iso88598i.decode('\uFFFF', { mode: 'rEpLaCeMeNt' }),
	'\uFFFD',
	'Mode names are case-insensitive'
);
assert.throws(
	() => {
		iso88598i.decode('\uFFFF', { mode: 'fatal' });
	},
	Error,
	'Decoding a byte that is invalid for this encoding throws an error in `fatal` mode'
);
assert.throws(
	() => {
		iso88598i.decode('\uFFFF', { mode: 'FATAL' });
	},
	Error,
	'Decoding a byte that is invalid for this encoding throws an error in `fatal` mode'
);
assert.throws(
	() => {
		iso88598i.decode('\uFFFF', { mode: 'fAtAl' });
	},
	Error,
	'Mode names are case-insensitive'
);
