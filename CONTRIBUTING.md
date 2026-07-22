# Contributing A Trial Listing

Agent Trials accepts provider submissions through GitHub issues. External providers should not open listing pull requests directly.

## Provider Workflow

1. Open the listing request issue form:

https://github.com/vatsashah45/agent-trials-listings/issues/new?template=free_trial_listing.yml

2. Fill in the public product and trial metadata.
3. Submit the issue.
4. Wait for maintainer review.

Maintainers will create the listing pull request if the request is approved.

## Provider Rules

- Submit exactly one product or service trial per issue.
- Include only public product and trial metadata.
- Do not include API keys, secrets, private credentials, customer data, prompts, tracking pixels, or internal docs.
- Do not claim partnership, verification, endorsement, or official status unless it is publicly verifiable.
- Use public URLs owned or provided by the company.

## Required Fields

The issue form asks for product name, company name, product website URL, free trial URL, category, short description, and trial terms.

Optional fields are docs URL and logo URL.

Allowed categories: `developer-tools`, `data`, `search`, `browser-automation`, `crm`, `sales`, `support`, `payments`, `finance`, `analytics`, `security`, `infrastructure`, `productivity`, `communications`, `ai-tools`, `other`.

## Maintainer Workflow

Maintainers convert approved issues into listing PRs.

1. Create a branch from `main`.
2. Add exactly one listing JSON file: `data/listings/{company-slug}/{product-slug}.json`.
3. Use lowercase kebab-case slugs.
4. Run `pnpm install` and `pnpm validate:listings`.
5. Open a PR that closes the approved issue.
6. Merge only after validation passes.

After merge to `main`, the deploy workflow triggers the private Agent Trials app to sync listings and rebuild.

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

## Direct Pull Requests

Direct listing pull requests from external providers may be closed and redirected to the issue form. This keeps submissions structured and gives maintainers a consistent review path.
