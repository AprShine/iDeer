import { useMemo } from 'react';

export function useDesktopEmbed() {
  return useMemo(
    () =>
      new URLSearchParams(window.location.search).get('desktop_embed') === '1',
    [],
  );
}
