import { useState } from "react";

type Timer = ReturnType<typeof setTimeout>;
type CallBackFunc = (...args: any[]) => void;

export function useDebounce<Func extends CallBackFunc>(
  func: Func,
  delay = 1000
) {
  const [timer, setTimer] = useState<Timer>();

  const debouncedFunction = ((...args) => {
    const newTimer = setTimeout(() => {
      func(...args);
    }, delay);
    clearTimeout(timer);
    setTimer(newTimer);
  }) as Func;

  return debouncedFunction;
}
