import { definitions } from "./deps.ts";
import transformer from "./transformer.ts";

const result = transformer(definitions);
console.log("Transform success");

await Deno.writeTextFile("vd.json", JSON.stringify(result, null, 2));