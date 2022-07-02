import { createBot, startBot } from "https://deno.land/x/discordeno@13.0.0-rc18/mod.ts";
import { enableCachePlugin, enableCacheSweepers } from "https://deno.land/x/discordeno_cache_plugin@0.0.18/mod.ts";

export const Main = async () => {
  const baseBot = createBot({
    token: Deno.env.get("DISCORD_TOKEN"),
    intents: ["Guilds", "GuildMessages"],
    botId: Deno.env.get("BOT_ID"),
    events: {
      ready() {
        console.log("Successfully connected to gateway");
      },
      messageCreate: async (bot, message) => {
        if(message.isBot) return;
        await bot.helpers.sendMessage(message.channelId, { content: "Hello World!" });
      },
    },
  });
  
  const bot = enableCachePlugin(baseBot);
  
  enableCacheSweepers(bot);
  
  await startBot(bot);
}