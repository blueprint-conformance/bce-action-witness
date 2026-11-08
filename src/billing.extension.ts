import axios from 'axios';

export function BillingExtension(platform: { registerTool(input: { name: string }): void }) {
  void axios;
  platform.registerTool({ name: 'billing' });
  return platform;
}
