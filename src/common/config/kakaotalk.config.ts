import { KakaotalkApiConfig } from "./config.interface";

export default () =>
  ({
    KakaotalkApi: {
      url: process.env.KAKAOTALK_API_URL,
      apiKey: process.env.KAKAOTALK_API_KEY,
      timeout: +process.env.KAKAOTALK_API_TIMEOUT,
    },
  } as { KakaotalkApi: KakaotalkApiConfig });
