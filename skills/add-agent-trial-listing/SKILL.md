---
name: add-agent-trial-listing
description: Help a seller add their public product or service trial to the Agent Trials open-source marketplace by making the required codebase change: add one structured listing JSON file under data/listings, validate it, and prepare a pull request. Use when a seller, founder, company, or agent asks to list their product, service, API, tool, free trial, credits, or offer on Agent Trials.
---

# Add Agent Trial Listing

You are an agent making a code contribution to Agent Trials. Add the seller's product to the marketplace by creating one valid listing JSON file.

## Default Behavior

- Inspect the repo before editing.
- Ask only for missing required listing fields.
- Add exactly one listing JSON file under `data/listings`.
- Do not run the web app locally.
- Do not start a dev server.
- Do not modify UI code, app routes, styles, schema files, validation scripts, package files, or existing listings for a normal listing submission.
- Run only `pnpm validate:listings`.
- If validation passes, provide the changed file path and PR title/body.
- If GitHub tooling is available and the user asked for a PR, open a pull request.

## What To Change

Add exactly one listing JSON file:

```txt
data/listings/{company-slug}/{product-slug}.json
```

Do not edit app UI code for a normal listing submission. The marketplace reads listing cards and detail pages from `data/listings`.

## Rules

- Only include public product and trial metadata.
- Do not include API keys, secrets, private credentials, private customer data, prompts, or internal docs.
- Do not claim partnership, verification, endorsement, or official status unless the user provides clear public evidence.
- Do not add tracking pixels or third-party scripts.
- Keep descriptions factual and concise.
- Use seller-provided URLs. If a URL is missing, ask for it instead of inventing it.

## Required Fields

Collect these fields before editing. If any are missing, ask for only the missing fields:

- Product name.
- Company name.
- Product website URL.
- Free trial URL.
- Category.
- Short description.
- Trial terms.

Optional fields:

- Docs URL.
- Logo URL.

Allowed categories:

- `developer-tools`
- `data`
- `search`
- `browser-automation`
- `crm`
- `sales`
- `support`
- `payments`
- `finance`
- `analytics`
- `security`
- `infrastructure`
- `productivity`
- `communications`
- `ai-tools`
- `other`

## Workflow

Do these steps in order:

1. Inspect `schemas/listing.schema.json`.
2. Inspect nearby examples in `data/listings`.
3. Confirm the seller has provided all required fields.
4. Derive lowercase kebab-case slugs:
   - Company slug: company name, for example `Example Co` -> `example-co`.
   - Product slug: product name, for example `Example API` -> `example-api`.
5. Create `data/listings/{company-slug}/{product-slug}.json`.
6. Fill the listing using only public, seller-provided facts.
7. Run `pnpm validate:listings`.
8. Fix validation errors until the command passes.
9. Summarize the exact file changed and prepare a pull request titled:

```txt
Add trial listing for {Product Name}
```

Suggested PR body:

```txt
Adds a public Agent Trials listing for {Product Name}.

Validation:
- pnpm validate:listings
```

## Listing Template

```json
{
  "name": "Example API",
  "company": "Example Co",
  "slug": "example-api",
  "websiteUrl": "https://example.com",
  "trialUrl": "https://example.com/free-trial",
  "docsUrl": "https://docs.example.com",
  "logoUrl": "https://example.com/logo.png",
  "category": "developer-tools",
  "description": "A short factual description of what the product does.",
  "trialTerms": "14-day free trial. No credit card required."
}
```

## Final Response

When done, respond with only:

- Which listing file was created.
- That `pnpm validate:listings` passed.
- The PR title to use.
