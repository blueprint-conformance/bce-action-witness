# Witness record

## Scope

This record distinguishes two claims:

1. **External-repository execution:** the generated BCE Action runs in this repository through an
   immutable commit. GitHub Actions run URLs provide the evidence.
2. **Independent-human usability:** not established by the creator-maintained runs below. A future
   contributor must add their own signed-off observation without being coached through the commands.

## Historical candidate under test

- BCE Action and Git dependency: `blueprint-conformance/bce@5d8a3d96b184ad47d6cdec235f80cde1fb1e9a42`
- Blueprint: `no-direct-http-client@0.1.0`
- Posture: advisory, proposed, unratified (advisory table below); **enforced** since 2026-09-03 (second table)

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

## Creator-maintained external Action runs — ENFORCED posture (2026-09-03)

The advisory table above proves discrimination but every one of its runs — including
the planted drift — concluded `success` at the workflow level, because advisory mode
exits 0 by design. That cannot evidence that BCE *blocks*. So the gate was graduated
(`bce graduate`, bce-engine@0.1.5; ceremony record `.blueprints/GRADUATION.md`,
`.bce-mode.json` → `enforced`) and the same three stages were replayed under the
enforced posture with the same immutable Action pin
`blueprint-conformance/bce@5d8a3d96b184ad47d6cdec235f80cde1fb1e9a42`.

| Stage | Commit | GitHub Actions evidence | Observed result |
|---|---|---|---|
| graduate (clean tree) | `086baf7dc0fe0c6409182dfa3fe3c4ea49ef256e` | [run 33689516050](https://github.com/blueprint-conformance/bce-action-witness/actions/runs/33689516050) | score 100 / pass; workflow conclusion `success` |
| planted drift (enforced) | `dc29cc2a2d7a97a1d812b3051321bfae40fe5a89` | [run 33689961361](https://github.com/blueprint-conformance/bce-action-witness/actions/runs/33689961361) | `forbidden-dependency-axios` at `src/billing.extension.ts#L1`; the Action step FAILED; workflow conclusion **`failure`** (exit 1) — the build is BLOCKED |
| corrected | `fa6981192259c45aca582917c15d5f606984e4bf` | [run 33690296051](https://github.com/blueprint-conformance/bce-action-witness/actions/runs/33690296051) | same Action and blueprint returned to score 100 / pass; workflow conclusion `success` |

This establishes external-repository execution AND enforcement (a RED that blocks).
It still does not establish independent-human usability (creator-maintained).

## Creator-maintained replay — ENFORCED posture at the v0.6.3 Action (2026-11-10)

The same sequence ran on the unmerged draft PR #9 (branch `witness/v0.6.3-enforced`) with the BCE
Action at the v0.6.3 source commit `blueprint-conformance/bce@0e0b022a20e458f77118c5adb210e5e26e5a6e82`.
The committed workflow pin on `main` is unchanged.

| Stage | Commit | GitHub Actions evidence | Observed result |
|---|---|---|---|
| clean | `8740cb3` | [run 42729584269](https://github.com/blueprint-conformance/bce-action-witness/actions/runs/42729584269) | `bce gate [enforced]`: score 100 / pass; workflow conclusion `success` |
| planted drift (enforced) | `c86cf97` | [run 42729720960](https://github.com/blueprint-conformance/bce-action-witness/actions/runs/42729720960) | score 60; `forbidden-dependency-axios` at `src/billing.extension.ts#L1`; workflow conclusion **`failure`** — the build is BLOCKED |
| corrected | `4ab1868` | [run 42729865676](https://github.com/blueprint-conformance/bce-action-witness/actions/runs/42729865676) | score 100 / pass; workflow conclusion `success`; `src/` byte-identical to `main` |

Still creator-maintained; it does not establish independent-human usability.

## Creator-maintained replay — ENFORCED posture at the v0.6.2 Action (2026-11-08)

The same sequence ran on the unmerged draft PR #7 (branch `witness/v0.6.2-enforced`). It used the BCE
Action at the v0.6.2 source commit `blueprint-conformance/bce@17be7a3d25ca1db62be58ce88d6c16d7e35cd3ac`.
The committed workflow pin on `main` is unchanged.

| Stage | Commit | GitHub Actions evidence | Observed result |
|---|---|---|---|
| clean | `0406408` | [run 42499038562](https://github.com/blueprint-conformance/bce-action-witness/actions/runs/42499038562) | `bce gate [enforced]`: score 100 / pass; workflow conclusion `success` |
| planted drift (enforced) | `7e362fc` | [run 42499103158](https://github.com/blueprint-conformance/bce-action-witness/actions/runs/42499103158) | score 60; `forbidden-dependency-axios` at `src/billing.extension.ts#L1`; workflow conclusion **`failure`**, so the build is BLOCKED |
| corrected | `f26623e` | [run 42499587692](https://github.com/blueprint-conformance/bce-action-witness/actions/runs/42499587692) | score 100 / pass; workflow conclusion `success`; `src/` byte-identical to `main` |

This is still creator-maintained. It does not establish independent-human usability.

## Creator-maintained replay — ENFORCED posture at the v0.6.1 Action (2026-11-08)

The same sequence ran on the unmerged draft PR #5 (branch `witness/v0.6.1-enforced`). It used the BCE
Action at the v0.6.1 source commit `blueprint-conformance/bce@ef5b806dcf58b1100db9ca512c6f7683d3873697`
and the committed enforced posture. The committed workflow pin on `main` is unchanged; moving it needs
the human review described in `README.md`.

| Stage | Commit | GitHub Actions evidence | Observed result |
|---|---|---|---|
| clean | `eadcd130b2bd909d113cb13006889b70f5b44c15` | [run 42495682999](https://github.com/blueprint-conformance/bce-action-witness/actions/runs/42495682999) | `bce gate [enforced]`: `no-direct-http-client@0.1.1` score 100 / pass; workflow conclusion `success` |
| planted drift (enforced) | `6335dd361860a1d9a801adee951ea87301882b88` | [run 42495743548](https://github.com/blueprint-conformance/bce-action-witness/actions/runs/42495743548) | score 60; `forbidden-dependency-axios` at `src/billing.extension.ts#L1`; workflow conclusion **`failure`**, so the build is BLOCKED |
| corrected | `f60aa6b3b96665b08bd42bd869dd7dc95fedb777` | [run 42495801746](https://github.com/blueprint-conformance/bce-action-witness/actions/runs/42495801746) | score 100 / pass; workflow conclusion `success`; `src/` byte-identical to `main` |

This is still creator-maintained. It does not establish independent-human usability.

## Independent contributor protocol

Without private guidance from the maintainer:

1. Fork or clone this repository on Node 22.
2. Follow `README.md` using only committed instructions.
3. Open a pull request that plants `import axios from 'axios'` in `src/billing.extension.ts`.
4. Record whether the generated Action names the violated contract and source anchor.
5. Remove the drift and record whether the same Action returns to a clean grade.
6. Add a short, candid note here: confusing steps, hidden prerequisites, and whether BCE helped.

Do not claim independence if a maintainer supplied missing commands interactively.

## Lifecycle record correction

The original graduation changed actual mode to enforced but left the adoption manifest at
proposed/advisory. This correction records `enforced-unratified` honestly and preserves the original
graduation and RED/GREEN evidence. It also updates the blueprint's repository identity after the
repository transfer and supplies the previously missing `architecture/network-boundary` intent
file. The direct-axios constraint and critical severity are unchanged. Agent Skills and CODEOWNERS
are now installed. The committed solo-steward policy enables a subsequent authenticated ceremony;
this preparation itself does not claim ratification or independent review.

The current Action and Git dependency are pinned to merged BCE source `e47d778cf549ce88fc83dfc57dd59bd18cc79eac`.
The historical tables above retain their original artifact identities.

## Authenticated self-ratification (2026-09-06)

[The live GitHub ceremony](evidence/self-adoption/README.md) ratified the draft as approved
`no-direct-http-client@0.1.1`. The critical constraint and scope remain unchanged. Adoption now
records `ratified-enforced` and `self-ratified`, bound to authenticated policy history. Repeating
`graduate` preserved the existing enforced mode and original graduation record without inventing
a new transition. Doctor reports ready and kills the planted direct-axios source mutation.
This remains creator-maintained evidence; it does not establish independent adoption or efficacy.
