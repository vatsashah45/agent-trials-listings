# Agent Trials Listings

Public listing requests and listing data for Agent Trials.

This repository is only for public free-trial listing submissions. The Agent Trials application, auth, telemetry, World ID verification, claim enforcement, provider handoff, and database code live in a private repository.

## Submit A Trial

Providers should not open code changes directly. Submit a structured listing request issue instead:

https://github.com/vatsashah45/agent-trials-listings/issues/new?template=free_trial_listing.yml

Agent Trials maintainers review listing requests, create the listing JSON pull request, and merge approved listings.

## Publication Flow

1. Provider submits a listing request issue.
2. Maintainers review the public product and trial metadata.
3. A maintainer creates one listing JSON pull request from the approved issue.
4. `pnpm validate:listings` must pass.
5. Merge to `main` triggers the Agent Trials deployment workflow.
6. The private Agent Trials app syncs listings from this repo at build time.

## Listing Format

Maintainer PRs add one JSON file:

```txt
data/listings/{company-slug}/{product-slug}.json
```

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

Required fields: `name`, `company`, `slug`, `websiteUrl`, `trialUrl`, `category`, `description`, `trialTerms`.

Optional fields: `docsUrl`, `logoUrl`.

## Validate

```bash
pnpm install
pnpm validate:listings
```

## Agent Skill

Providers and maintainers can use the bundled skill:

```txt
skills/add-agent-trial-listing/SKILL.md
```

The deployed skill URL is:

```txt
https://agenttrials.co/contribute.md
```

## License

MIT
