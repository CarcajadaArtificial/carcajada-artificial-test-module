import setup, { iMolecule } from "./setup.ts";

export default function (props: Partial<iMolecule>) {
  const { fwd, attribute, children, ...p } = setup(props);

  return (
    <div {...fwd.secondary}>
      <nav {...p}>
        {children}
      </nav>
    </div>
  );
}
