import { config } from "https://deno.land/x/dotenv/mod.ts";

Object.keys(config()).forEach((key) => Deno.env.set(key, config()[key]));