import { default as definitions } from "$definitions" assert { type: "json" };
import transformer from "./transformer/main.ts";

const result = transformer(definitions);
console.log("Transform success");

await Deno.writeTextFile("vd.json", JSON.stringify(result));
