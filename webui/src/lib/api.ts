import type { PublicMeta } from './types';

export async function getMeta(): Promise<PublicMeta> {
  const res = await fetch('/api/public/meta');
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export function createRunWebSocket(): WebSocket {
  const scheme = window.location.protocol === 'https:' ? 'wss' : 'ws';
  return new WebSocket(`${scheme}://${window.location.host}/ws/run`);
}
