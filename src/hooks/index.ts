import { ChangeEvent, useCallback, useState, useEffect, useRef } from "react";

export const useForm = <T extends {}>(initialValue: T) => {
  const [state, setState] = useState<T>(initialValue);
  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return { state, setState, onChangeHandler };
};

export const useInput = (initValue?: string) => {
  const [state, setState] = useState<string>(initValue ?? "");
  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }, []);

  return [state, setState, changeHandler] as const;
};

export const useOutsideClick = <T extends HTMLElement>(handler: () => void) => {
  const ref = useRef<T>(null);

  const outsideHandler = useCallback(
    (e: any) => {
      if (!ref?.current?.contains(e.target)) {
        handler();
      }
    },
    [handler]
  );

  useEffect(() => {
    document.body.addEventListener("click", outsideHandler);

    return () => {
      document.body.removeEventListener("click", outsideHandler);
    };
  }, []);

  return ref;
};
