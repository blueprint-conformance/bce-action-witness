# Authenticated self-adoption evidence

Completed on 2026-09-06 through [the governed pull request](https://github.com/blueprint-conformance/bce-action-witness/pull/4) and its
[packet-bound GitHub COMMENT review](https://github.com/blueprint-conformance/bce-action-witness/pull/4#pullrequestreview-5125803495). The human steward approved the exact
prepared decision; the coding agent posted and executed it under that authorization. GitHub identity,
current maintain/admin permission, exact PR head/base, and the base-committed solo policy were checked
again at landing. No mocked review API or branch-protection bypass was used.

Ratified the draft direct-axios contract as approved 0.1.1, preserving its critical constraint and scope.

The installed blueprint, authenticated policy history, and adoption manifest agree on
`ratified-enforced` and `self-ratified`. [Doctor](witness-self-ratification-20260906/doctor.txt) returned ready, exit 0.
[Repeated graduation](witness-self-ratification-20260906/graduate.txt) was a no-op: enforcement was already enabled, and
existing history was preserved. CI now requires doctor readiness.

## Preserved artifacts

- [Review with the authenticated decision](witness-self-ratification-20260906/review.txt) ([HTML](witness-self-ratification-20260906/review.html))
- [Canonical packet](witness-self-ratification-20260906/review-packet.json): `sha256:13bce874e60bb5f9218951c6e15a315ea1642ecf29f9c3e27ce8db0505e7dac7`
- [Saved decision](witness-self-ratification-20260906/decisions/approve-eaedd84e179f68ba.json)
- [Sanitized GitHub receipt](witness-self-ratification-20260906/github-review-receipt.json)
- [Frozen runtime binding](witness-self-ratification-20260906/runtime-binding.json)
- [Installed policy history](../../.blueprints/POLICY-HISTORY.jsonl)
- [Adoption manifest](../../.bce-adoption.json)

The packet preserves the pre-transition source head `0d659f34e849a58285580ded228b0894424e8bd2`.
The approved output has a separate digest in policy history. The archived draft is a review input,
not the installed approved contract. Offline `verifyReviewPacket(packet, decision)` returned integrity
verified and decision valid; it checks internal consistency, not GitHub authenticity. Replaying a
live ceremony against the later, changed checkout must refuse freshness checks.

The ceremony used a frozen source-built runtime from commit
`416a19d9662334eebea0835e979f15084b2878c2`, with tarball SHA-256
`6247894fb904d603c9f28e4e1b89843743bb1c5ec69eeb8eea0ac34f019706ed`.
This is distinct from the immutable npm `bce-engine@0.3.0` release, which predates these additions.

This evidence proves first-party operational self-adoption. The decision is explicitly self-ratified.
It does not establish independent review, independent replication, external adoption, or product efficacy.
