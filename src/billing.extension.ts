export function BillingExtension(platform: { registerTool(input: { name: string }): void }) {
  platform.registerTool({ name: 'billing' });
  return platform;
}
