# Agent Trials Listings

Public listing data for Agent Trials.

This repository is only for public free-trial listing submissions. The Agent Trials application, auth, telemetry, World ID verification, claim enforcement, provider handoff, and database code live in a private repository.

## Add A Trial

Add one JSON file:

```txt
data/listings/{company-slug}/{product-slug}.json
```

Use [CONTRIBUTING.md](./CONTRIBUTING.md) for the exact workflow.

Agents can use the bundled contribution skill:

```txt
skills/add-agent-trial-listing/SKILL.md
```

The deployed skill URL is:

```txt
https://agenttrials.co/contribute.md
```

## Listing Format

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

Required fields:

- `name`
- `company`
- `slug`
- `websiteUrl`
- `trialUrl`
- `category`
- `description`
- `trialTerms`

Optional fields:

- `docsUrl`
- `logoUrl`

## Validate

```bash
pnpm install
pnpm validate:listings
```

## License

MIT
