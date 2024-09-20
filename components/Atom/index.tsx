import { JSX } from "preact";
import setup, { iAtom } from "./setup.ts";

export default function (props: Partial<iAtom>): JSX.Element {
  const { fwd, attribute, children, ...p } = setup(props);

  return (
    <div {...fwd.secondary}>
      <nav {...p}>
        {children}
      </nav>
    </div>
  );
}
