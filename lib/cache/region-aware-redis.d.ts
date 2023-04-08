import { RedisClientOptions } from "redis";
export declare function buildRegionAwareRedisStorage(cacheKeyPrefix: string, redisClientOptions?: RedisClientOptions): import("axios-cache-interceptor").AxiosStorage;
