import { useEffect, useSyncExternalStore } from "react";

const getSnapshotFromSessionStorage = (key: string): string => {
  return sessionStorage.getItem(key);
};

const subscribe = (callback: () => void): (() => void) => {
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("storage", callback);
  };
};

export function setStoreData(key: string, value: unknown) {
  sessionStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event("storage"));
}

export function useStoreData<T>(key: string): T {
  const value = useSyncExternalStore(
    subscribe,
    getSnapshotFromSessionStorage.bind(null, key),
  ) as string;

  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export function useAsyncStoreData(key: string, value: unknown) {
  useEffect(() => {
    setStoreData(key, value);
  }, [key, value]);
}
