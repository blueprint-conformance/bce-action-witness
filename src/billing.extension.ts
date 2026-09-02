import axios from 'axios';

export function BillingExtension(platform: { registerTool(input: { name: string }): void }) {
  platform.registerTool({ name: 'billing' });
  void axios;
  return platform;
}
