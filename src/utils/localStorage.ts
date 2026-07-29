export function loadLocalStorage<T>(key: string, defaultValue: T): T {
  if (typeof window === "undefined") {
    throw new Error(
      `FAILED: Cannot get ${key} from local storage. It is not client component.`,
    );
  }
  try {
    const data = localStorage.getItem(key);
    if (!data) {
      return defaultValue;
    }
    return JSON.parse(data) as T;
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
}

export function saveLocalStorage<T>(key: string, value: T): void {
  if (typeof window === "undefined") {
    return;
  }
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    throw new Error(`FAILED: Cannot save ${key} to local storage!`);
  }
}
