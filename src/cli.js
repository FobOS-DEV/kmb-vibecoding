const { slugify } = require("./slugify");
const pkg = require("../package.json");

const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
console.log(`Usage:
npm run slug -- "Your text here"
npm run slug -- --help
npm run slug -- --version`);
process.exit(0);
}

if (args.includes("--version") || args.includes("-v")) {
console.log(pkg.version);
process.exit(0);
}

const input = args.join(" ").trim();

if (!input) {
console.error('Usage: npm run slug -- "Your text here"');
process.exit(1);
}

const result = slugify(input);
if (!result) {
console.error("Error: could not generate slug from input");
process.exit(2);
}

console.log(result);
