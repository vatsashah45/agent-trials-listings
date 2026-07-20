import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const listingsRoot = path.join(root, "data", "listings");

const categories = new Set([
  "developer-tools",
  "data",
  "search",
  "browser-automation",
  "crm",
  "sales",
  "support",
  "payments",
  "finance",
  "analytics",
  "security",
  "infrastructure",
  "productivity",
  "communications",
  "ai-tools",
  "other"
]);

const required = ["name", "company", "slug", "websiteUrl", "trialUrl", "category", "description", "trialTerms"];
const allowed = new Set([...required, "docsUrl", "logoUrl"]);
const urlFields = ["websiteUrl", "trialUrl", "docsUrl", "logoUrl"];
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

async function readJsonFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return readJsonFiles(fullPath);
      }
      return entry.isFile() && entry.name.endsWith(".json") ? [fullPath] : [];
    })
  );

  return files.flat();
}

function isUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function validateListing(file, listing) {
  const errors = [];

  if (!listing || typeof listing !== "object" || Array.isArray(listing)) {
    return ["listing must be a JSON object"];
  }

  for (const key of required) {
    if (!(key in listing)) {
      errors.push(`missing required field "${key}"`);
    }
  }

  for (const key of Object.keys(listing)) {
    if (!allowed.has(key)) {
      errors.push(`unknown field "${key}"`);
    }
  }

  if (typeof listing.slug === "string" && !slugPattern.test(listing.slug)) {
    errors.push("slug must be lowercase kebab-case");
  }

  if (typeof listing.category === "string" && !categories.has(listing.category)) {
    errors.push(`category "${listing.category}" is not allowed`);
  }

  for (const key of urlFields) {
    if (key in listing && (typeof listing[key] !== "string" || !isUrl(listing[key]))) {
      errors.push(`${key} must be a valid http(s) URL`);
    }
  }

  const expectedFileName = `${listing.slug}.json`;
  if (listing.slug && path.basename(file) !== expectedFileName) {
    errors.push(`file name must be ${expectedFileName}`);
  }

  if (typeof listing.description === "string" && listing.description.length < 20) {
    errors.push("description must be at least 20 characters");
  }

  if (typeof listing.trialTerms === "string" && listing.trialTerms.length < 10) {
    errors.push("trialTerms must be at least 10 characters");
  }

  return errors;
}

const files = await readJsonFiles(listingsRoot);
const slugs = new Set();
const failures = [];

for (const file of files) {
  try {
    const listing = JSON.parse(await fs.readFile(file, "utf8"));
    const errors = validateListing(file, listing);
    if (listing && typeof listing === "object" && !Array.isArray(listing) && typeof listing.slug === "string") {
      if (slugs.has(listing.slug)) {
        errors.push(`duplicate slug "${listing.slug}"`);
      }
      slugs.add(listing.slug);
    }

    if (errors.length > 0) {
      failures.push({ file, errors });
    }
  } catch (error) {
    failures.push({ file, errors: [`invalid JSON: ${error.message}`] });
  }
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`\n${path.relative(root, failure.file)}`);
    for (const error of failure.errors) {
      console.error(`  - ${error}`);
    }
  }
  process.exit(1);
}

console.log(`Validated ${files.length} listing file${files.length === 1 ? "" : "s"}.`);
