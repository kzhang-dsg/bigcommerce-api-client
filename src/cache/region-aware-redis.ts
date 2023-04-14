import {
    buildStorage,
    CachedStorageValue,
    canStale,
} from "axios-cache-interceptor";
import * as redis from "redis";
import { RedisClientOptions } from "redis";
import { parseDate } from "../util";

export function buildRegionAwareRedisStorage(
    cacheKeyPrefix: string,
    redisClientOptions?: RedisClientOptions
) {
    const client = redis.createClient(redisClientOptions);

    const storage = buildStorage({
        async find(key) {
            if (!client.isOpen) {
                await client.connect();
            }
            const result = await client.get(`${cacheKeyPrefix}:${key}`);
            return result ? JSON.parse(result, parseDate) : undefined;
        },

        async set(key, value) {
            if (!client.isOpen) {
                await client.connect();
            }
            await client.set(
                `${cacheKeyPrefix}:${key}`,
                JSON.stringify(value),
                {
                    PX:
                        value.data !== undefined &&
                        canStale(value as CachedStorageValue)
                            ? value.ttl || 0
                            : undefined,
                }
            );
        },

        async remove(key) {
            if (!client.isOpen) {
                await client.connect();
            }

            if (key.endsWith("*")) {
                const keys = await client.keys(`${cacheKeyPrefix}:${key}`);
                client.del(keys);
            } else {
                await client.del(`${cacheKeyPrefix}:${key}`);
            }
        },
    });

    return storage;
}
