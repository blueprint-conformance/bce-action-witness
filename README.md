# BCE external Action witness

This repository is a transparent consumer-side witness for the public BCE onboarding path. It is
separate from `blueprint-conformance/bce` and runs BCE through the generated GitHub Action at an
immutable commit.

This repository is maintained by the BCE creator account. It proves that a real external GitHub
repository can install, configure, and execute the generated Action; it is **not** an independent
human-user attestation.

The committed source is intentionally small. Pull requests may plant and then remove a direct
`axios` import to demonstrate that the same contract reports RED and GREEN without changing policy.

## Reproduce locally

```bash
npm ci
npx --no-install bce demo
npx --no-install bce doctor --repo .
npx --no-install bce gate --repo . --all
```

Policy files, mode, baseline, workflow, and engine pins require explicit human review. The initial
onboarding state was advisory and unratified. The current gate is enforced and its blueprint is approved at `0.1.1`, with
[authenticated self-ratification](evidence/self-adoption/README.md) and matching lifecycle records. The source dependency uses an exact public
HTTPS Git commit and needs Node 22+.
