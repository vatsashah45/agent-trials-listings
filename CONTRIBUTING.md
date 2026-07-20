# Contributing A Trial Listing

Use this guide to add a product trial to Agent Trials. A listing contribution should only change one JSON file under `data/listings`.

## Workflow

1. Fork this repository.
2. Create a branch:

```bash
git switch -c add-{product-slug}
```

3. Add one listing JSON file under `data/listings/{company-slug}/{product-slug}.json`.
4. Run:

```bash
pnpm install
pnpm validate:listings
```

5. Commit the listing file.
6. Open a pull request to `vatsashah45/agent-trials-listings`.

Do not edit app UI, routes, styles, package files, schemas, validation scripts, telemetry, or existing listings for a normal listing submission.

## Rules

- Add exactly one listing JSON file per product.
- Include only public product and trial metadata.
- Do not include API keys, secrets, private credentials, customer data, prompts, tracking pixels, or internal docs.
- Do not claim partnership, verification, endorsement, or official status unless it is publicly verifiable.

## Required Fields

Collect these fields before editing:

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

## File Path

Create:

```txt
data/listings/{company-slug}/{product-slug}.json
```

Slugs must be lowercase kebab-case:

```txt
Example Co -> example-co
Example API -> example-api
```

## JSON Template

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

Remove `docsUrl` or `logoUrl` if they are not available.

## Validate

Run:

```bash
pnpm install
pnpm validate:listings
```

Fix every validation error before opening a PR.

## Pull Request

Open a pull request to this repository.

PR title:

```txt
Add trial listing for {Product Name}
```

PR body:

```txt
Adds a public Agent Trials listing for {Product Name}.

Validation:
- pnpm validate:listings
```
