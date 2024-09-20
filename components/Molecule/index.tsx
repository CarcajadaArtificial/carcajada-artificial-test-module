import { JSX } from "preact";
import setup, { iMolecule } from "./setup.ts";

export default function (props: Partial<iMolecule>): JSX.Element {
  const { fwd, attribute, children, ...p } = setup(props);

  return (
    <div {...fwd.secondary}>
      <nav {...p}>
        {children}
      </nav>
    </div>
  );
}
