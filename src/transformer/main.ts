import { pipe } from "../utils.ts";

export default function transform(entries) {
  const p = pipe(
    addId,
  );
  
  return p(entries);
}

function addId(entries) {
  entries.forEach((e, i) => {
    e.id = i;
  });
  
  return entries;
}
