import { JSX } from "preact";

export type iComponent<T extends EventTarget = HTMLElement> =
  & iElement<T>
  & {
    nostyle?: boolean;
    nostyleAll?: boolean;
  };

export type iElement<T extends EventTarget = HTMLElement> =
  & JSX.HTMLAttributes<T>
  & Partial<ARIAMixin>
  & Partial<GlobalEventHandlers>;

export type iFwd<T extends EventTarget = HTMLElement> = iElement<T> & {
  nostyle?: boolean;
};

export type EmptyObject = Record<string | number | symbol, never>;
