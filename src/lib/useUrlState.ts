'use client';
import { useCallback, useEffect, useState } from 'react';

type Params = Record<string, string>;

const readParams = <T extends Params>(defaults: T): T => {
  const search = new URLSearchParams(window.location.search);
  return Object.fromEntries(
    Object.entries(defaults).map(([key, fallback]) => [key, search.get(key) ?? fallback])
  ) as T;
};

const writeParams = <T extends Params>(state: T, defaults: T) => {
  const search = new URLSearchParams(window.location.search);
  Object.keys(defaults).forEach((key) => search.delete(key));
  Object.keys(defaults).forEach((key) => {
    if (state[key] !== defaults[key]) search.set(key, state[key]);
  });
  const query = search.toString();
  const url = `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`;
  window.history.replaceState(window.history.state, '', url);
};

export const useUrlState = <T extends Params>(defaults: T) => {
  const [state, setState] = useState<T>(defaults);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(readParams(defaults));
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- defaults are read once on mount
  }, []);

  useEffect(() => {
    if (hydrated) writeParams(state, defaults);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- defaults are constant per page
  }, [state, hydrated]);

  const update = useCallback((patch: Partial<T>) => setState((previous) => ({ ...previous, ...patch })), []);
  const reset = useCallback(() => setState(defaults), [defaults]);

  return [state, update, reset] as const;
};
