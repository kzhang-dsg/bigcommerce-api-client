import { RedisClientOptions } from "redis";
export declare function buildRegionAwareRedisStorage(cacheKeyPrefix: string, redisClientOptions?: RedisClientOptions, axiosRequestTimeout?: number): import("axios-cache-interceptor").AxiosStorage;
