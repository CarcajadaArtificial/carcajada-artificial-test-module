import { iComponent, iFwd } from "../../src/types.ts";
import { iAtom } from "../Atom/setup.ts";

export type iMolecule = iComponent & {
  attribute: string;
  fwd: Partial<iMoleculeFwd>;
};

type iMoleculeFwd = {
  secondary: iFwd<HTMLDivElement>;
  atom: Partial<iAtom>;
};

const defaults: iMolecule = {
  attribute: "example value",
  fwd: {
    secondary: {},
    atom: {},
  },
};

export default (props: Partial<iMolecule>) => {
  return { ...defaults, ...props };
};
