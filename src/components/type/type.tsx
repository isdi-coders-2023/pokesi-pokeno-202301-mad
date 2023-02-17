import { TypesStructure } from "../../models/poke";

export function Type(props: TypesStructure) {
  return (
    <p className={props.type.name} key={props.type.name}>
      {props.type.name}
    </p>
  );
}
