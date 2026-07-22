---
name: add-agent-trial-listing
description: Help a provider submit a public product or service trial to Agent Trials. External providers should file a structured GitHub issue with public trial metadata only. Maintainers may use approved issues to create one listing JSON pull request in the public listings repo.
---

# Add Agent Trial Listing

Agent Trials accepts listing requests through GitHub issues in the public listings repository. External providers do not need to fork the repo or submit code changes.

## Default Behavior For Providers

When a seller, founder, company, or agent asks to list a product, service, API, tool, free trial, credits, or offer:

- Do not edit files.
- Do not create a branch.
- Do not open a pull request.
- Collect only the missing required public listing fields.
- Direct the provider to the public listing request issue form.
- If GitHub tooling is available and the user asks you to submit it, open a GitHub issue using the listing request template.

Issue form:

```txt
https://github.com/vatsashah45/agent-trials-listings/issues/new?template=free_trial_listing.yml
```

## Provider Submission Rules

- Include only public product and trial metadata.
- Do not include API keys, secrets, private credentials, private customer data, prompts, tracking pixels, or internal docs.
- Do not claim partnership, verification, endorsement, or official status unless the provider gives public evidence.
- Keep descriptions factual and concise.
- Use provider-supplied URLs. If a URL is missing, ask for it instead of inventing it.

## Required Fields

Collect these fields before filing the issue. Ask only for missing fields:

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

## Provider Issue Body

If GitHub issue tooling is not available, prepare this issue body for the provider:

```txt
Product name:
Company name:
Product website URL:
Free trial URL:
Docs URL, optional:
Logo URL, optional:
Category:
Short description:
Trial terms:
Public evidence for official/verified claims, optional:

Confirmation:
- This submission includes only public product and trial metadata.
- This submission does not include secrets, credentials, private customer data, prompts, tracking pixels, or internal docs.
```

## Maintainer Mode

Only use this mode when an Agent Trials maintainer explicitly asks you to turn an approved listing issue into a pull request.

In maintainer mode:

1. Inspect `schemas/listing.schema.json`.
2. Inspect nearby examples in `data/listings`.
3. Read the approved listing issue.
4. Confirm all required fields are present.
5. Derive lowercase kebab-case slugs.
6. Create exactly one listing JSON file: `data/listings/{company-slug}/{product-slug}.json`.
7. Fill the listing using only public facts from the issue.
8. Run `pnpm validate:listings`.
9. Fix validation errors until it passes.
10. Open a pull request in `vatsashah45/agent-trials-listings`.

Do not edit app code, private Agent Trials code, schemas, validation scripts, package files, existing listings, workflows, or repository settings for a normal listing PR.

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

Remove `docsUrl` or `logoUrl` if unavailable.

## Maintainer PR

PR title:

```txt
Add trial listing for {Product Name}
```

PR body:

```txt
Adds a public Agent Trials listing for {Product Name}.

Source issue:
- Closes #{issue_number}

Validation:
- pnpm validate:listings
```

## Final Response

For provider submissions, respond with only:

- The listing request issue URL.
- Which required fields are still missing, if any.
- A reminder to include only public product and trial metadata.

For maintainer PRs, respond with only:

- Which listing file was created.
- That `pnpm validate:listings` passed.
- The PR title and URL.
- That merge to `main` will trigger the Agent Trials deployment workflow.
