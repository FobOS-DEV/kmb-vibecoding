const { slugify } = require("./slugify");

const raw = process.argv.slice(2).join(" ");
const input = raw.trim();

if (!input) {
console.error('Usage: npm run slug -- "Your text here"');
process.exit(1);
}

const result = slugify(input);
console.log(result);
