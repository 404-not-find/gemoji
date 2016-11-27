/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module gemoji
 * @fileoverview Test suite for `gemoji`.
 */

'use strict';

/* Dependencies. */
var test = require('tape');
var emoji = require('./emoji.json');
var gemoji = require('./');

/* Tests. */
test('gemoji', function (t) {
  t.ok('name' in gemoji, 'should have a `name` property');
  t.ok('unicode' in gemoji, 'should have an `unicode` property');
  t.end();
});

/* Validate all crawled gemoji-objects. */
emoji.forEach(describeEntry);

/**
 * Validate if a crawled gemoji is indeed (correctly)
 * present in this module.
 */
function describeEntry(entry) {
  var unicode = entry.emoji;
  var description;
  var aliases;
  var tags;
  var alias;
  var information;

  /* Some gemoji, such as `octocat`, do not have a
   * unicode representation. Those are not present in
   * `gemoji`. Exit. */
  if (!unicode) {
    return;
  }

  description = entry.description;
  aliases = entry.aliases;
  tags = entry.tags;
  alias = aliases[0];
  information = gemoji.unicode[unicode];

  test(unicode + '   ' + description, function (t) {
    aliases.forEach(function (name) {
      t.equal(
        gemoji.name[name].emoji,
        unicode,
        'should be accessible by name (' + name + ' > object)'
      );
    });

    t.equal(
      gemoji.unicode[unicode].name,
      alias,
      'should be accessible by emoji (' + unicode + ' > object)'
    );

    t.equal(information.name, alias, 'should have a `name` field');
    t.equal(information.emoji, unicode, 'should have an `emoji` field');
    t.equal(information.description, description, 'should have a `description` field');
    t.deepEqual(information.names, aliases, 'should have a `names` field');
    t.deepEqual(information.tags, tags, 'should have a `tags` field');

    t.end();
  });
}
