import { config } from "https://deno.land/x/dotenv/mod.ts";
import {Main} from "./main.ts";

Object.keys(config()).forEach((key) => Deno.env.set(key, config()[key]));

await Main();