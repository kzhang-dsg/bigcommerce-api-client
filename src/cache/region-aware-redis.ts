import {
    buildStorage,
    CachedStorageValue,
    canStale,
} from "axios-cache-interceptor";
import * as redis from "redis";
import { RedisClientOptions } from "redis";

export function buildRegionAwareRedisStorage(
    redisClientOptions?: RedisClientOptions
) {
    const client = redis.createClient(redisClientOptions);

    const storage = buildStorage({
        async find(key) {
            if (!client.isOpen) {
                await client.connect();
            }
            const result = await client.get(`axios-cache:${key}`);
            return result ? JSON.parse(result) : null;
        },

        async set(key, value) {
            if (!client.isOpen) {
                await client.connect();
            }
            await client.set(`axios-cache:${key}`, JSON.stringify(value), {
                PXAT:
                    value.data !== undefined &&
                    canStale(value as CachedStorageValue)
                        ? value.createdAt + (value.ttl || 0)
                        : undefined,
            });
        },

        async remove(key) {
            if (!client.isOpen) {
                await client.connect();
            }

            if (key.endsWith("*")) {
                const keys = await client.keys(`axios-cache:${key}`);
                for (const k of keys) {
                    client.del(k);
                }
            } else {
                await client.del(`axios-cache:${key}`);
            }
        },
    });

    return storage;
}
