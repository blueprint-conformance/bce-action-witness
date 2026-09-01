# Witness record

## Scope

This record distinguishes two claims:

1. **External-repository execution:** the generated BCE Action runs in this repository through an
   immutable commit. GitHub Actions run URLs provide the evidence.
2. **Independent-human usability:** not established by the creator-maintained runs below. A future
   contributor must add their own signed-off observation without being coached through the commands.

## Candidate under test

- BCE Action and Git dependency: `blueprint-conformance/bce@5d8a3d96b184ad47d6cdec235f80cde1fb1e9a42`
- Blueprint: `no-direct-http-client@0.1.0`
- Posture: advisory, proposed, unratified

## Creator-maintained external Action runs

The sequence begins with a clean documentation-only change, then plants a direct `axios` import,
then removes it. Run URLs and observed outcomes are appended only after GitHub has executed them.

| Stage | Commit | GitHub Actions evidence | Observed result |
|---|---|---|---|
| clean | `093addfffeea3b70016478578989997e8a3e5a46` | [run 33497921200](https://github.com/blueprint-conformance/bce-action-witness/actions/runs/33497921200) | Action downloaded the immutable BCE commit, built its own engine on Node 22, and reported score 100 / pass |
| planted drift | `5eecf7741c35c1320bc8db2dc35047b4e4be7e87` | [run 33497995578](https://github.com/blueprint-conformance/bce-action-witness/actions/runs/33497995578) | score 60; `forbidden-dependency-axios` at `src/billing.extension.ts#L1`; visibly RED but non-blocking under committed advisory posture |
| corrected | `d4feab2b2064cb3c15dbdc1d3994db4e80f4ef3a` | [run 33498058816](https://github.com/blueprint-conformance/bce-action-witness/actions/runs/33498058816) | same Action and blueprint returned to score 100 / pass |

These runs establish external-repository execution and RED/GREEN discrimination. They do not
establish independent-human usability.

## Independent contributor protocol

Without private guidance from the maintainer:

1. Fork or clone this repository on Node 22.
2. Follow `README.md` using only committed instructions.
3. Open a pull request that plants `import axios from 'axios'` in `src/billing.extension.ts`.
4. Record whether the generated Action names the violated contract and source anchor.
5. Remove the drift and record whether the same Action returns to a clean grade.
6. Add a short, candid note here: confusing steps, hidden prerequisites, and whether BCE helped.

Do not claim independence if a maintainer supplied missing commands interactively.
