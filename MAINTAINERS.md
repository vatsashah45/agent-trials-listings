# Maintainer Guide

Use this guide to publish approved Agent Trials listing requests.

## Source Of Truth

- Providers submit listing request issues.
- Maintainers create listing pull requests.
- The private Agent Trials app syncs listings from this repository during build.
- Merging to `main` triggers the Vercel deploy hook workflow.

## Create A Listing PR From An Issue

1. Confirm the issue includes all required public metadata.
2. Confirm there are no secrets, private credentials, private customer data, prompts, tracking pixels, or internal docs.
3. Create a branch from `main`.
4. Add one JSON file under `data/listings/{company-slug}/{product-slug}.json`.
5. Run `pnpm validate:listings`.
6. Open a PR with `Closes #{issue_number}`.
7. Merge after validation and review.

## Deployment

After merge to `main`, GitHub Actions runs `.github/workflows/deploy-agent-trials.yml`, which calls the Vercel deploy hook stored in `VERCEL_DEPLOY_HOOK_URL`.

The private app build runs `pnpm sync:listings && next build`, pulling current listings from this repo.
