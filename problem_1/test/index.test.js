var assert = require('assert');
var anagram = require('../index');

describe('Anagram', function() {
  it('Stressed and desserts should show true', function() {
    assert.equal(anagram.isAnagram('Stressed', 'desserts'), true);
  });

  it('Alfred and Alfred should show false', function() {
    assert.equal(anagram.isAnagram('Alfred', 'Alfred'), false);
  });

  it('Cider and Cried should show true', function() {
    assert.equal(anagram.isAnagram('Cider', 'Cried'), true);
  });

  it('Hello and Hejsan should show false', function() {
    assert.equal(anagram.isAnagram('Hello', 'Hejsan'), false);
  });

  it('giving it a number should show false', function() {
    assert.equal(anagram.isAnagram(1, 'hello'), false);
  });
});