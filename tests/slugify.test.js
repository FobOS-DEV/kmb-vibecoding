const test = require("node:test");
const assert = require("node:assert/strict");
const { slugify } = require("../src/slugify");

test("slugify: basic words", () => {
assert.equal(slugify("Hello World"), "hello-world");
});

test("slugify: trims and collapses spaces", () => {
assert.equal(slugify(" Multiple spaces "), "multiple-spaces");
});

test("slugify: removes symbols", () => {
assert.equal(slugify("JS & Node"), "js-node");
});

test("slugify: empty input", () => {
assert.equal(slugify(""), "");
assert.equal(slugify(null), "");
});
test("slugify: cyrillic basic", () => {
    assert.equal(slugify("Привет мир"), "privet-mir");
    });
    
    test("slugify: cyrillic with yo", () => {
    assert.equal(slugify("Ёжик в тумане"), "yozhik-v-tumane");
    });
    
    test("slugify: cyrillic with numbers and punctuation", () => {
    assert.equal(slugify("Тест, 2026!"), "test-2026");
    });
    