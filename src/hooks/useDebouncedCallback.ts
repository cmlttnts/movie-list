import { debounce } from "lodash";
import { useEffect, useMemo } from "react";

type UseDebouncedCallbackOptions<T extends (...args: never[]) => void> = {
  callback: T;
  delay?: number;
  lodashOptions?: {
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
  };
};

export function useDebouncedCallback<T extends (...args: never[]) => void>({
  callback,
  delay = 500,
  lodashOptions,
}: UseDebouncedCallbackOptions<T>) {
  const debouncedCallback = useMemo(() => debounce(callback, delay, lodashOptions), [callback, delay, lodashOptions]);

  useEffect(() => {
    return () => {
      // if a new debounce is created, the old one can still be waiting to be called
      // cancel on unmount or after different debounce created
      debouncedCallback.cancel();
    };
  }, [debouncedCallback]);

  return { debouncedCallback, cancel: debouncedCallback.cancel };
}
