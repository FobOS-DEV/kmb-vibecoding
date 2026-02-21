const test = require("node:test");
const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");

test("cli: prints slugified text", () => {
const result = spawnSync("node", ["src/cli.js", "Hello", "World"], {
encoding: "utf8",
});

assert.equal(result.status, 0);
assert.equal(result.stdout.trim(), "hello-world");
});

test("cli: exits with error when input is missing", () => {
const result = spawnSync("node", ["src/cli.js"], {
encoding: "utf8",
});

assert.equal(result.status, 1);
assert.match(result.stderr, /Usage:/);
});
test("cli: prints help", () => {
    const result = spawnSync("node", ["src/cli.js", "--help"], { encoding: "utf8" });
    assert.equal(result.status, 0);
    assert.match(result.stdout, /Usage:/);
    });
    
    test("cli: prints version", () => {
    const result = spawnSync("node", ["src/cli.js", "--version"], { encoding: "utf8" });
    assert.equal(result.status, 0);
    assert.match(result.stdout.trim(), /^\d+\.\d+\.\d+$/);
    });
    