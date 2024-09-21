import { iComponent, iFwd } from "../../src/types.ts";

export type iAtom = iComponent & {
  attribute: string;
  foo: boolean;
  fwd: Partial<iAtomFwd>;
};

type iAtomFwd = {
  secondary: iFwd<HTMLDivElement>;
};

const defaults: iAtom = {
  attribute: "example value",
  foo: true,
  fwd: {
    secondary: {},
  },
};

export default (props: Partial<iAtom>) => {
  return { ...defaults, ...props };
};
