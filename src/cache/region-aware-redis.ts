import {
    buildStorage,
    CachedStorageValue,
    canStale,
} from "axios-cache-interceptor";
import * as redis from "redis";
import { RedisClientOptions } from "redis";
import { parseDate } from "../util";

export function buildRegionAwareRedisStorage(
    storeHash: string,
    redisClientOptions?: RedisClientOptions
) {
    const client = redis.createClient(redisClientOptions);

    const storage = buildStorage({
        async find(key) {
            if (!client.isOpen) {
                await client.connect();
            }
            const result = await client.get(`${storeHash}-cache:${key}`);
            return result ? JSON.parse(result, parseDate) : undefined;
        },

        async set(key, value) {
            if (!client.isOpen) {
                await client.connect();
            }
            await client.set(
                `${storeHash}-cache:${key}`,
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
                const keys = await client.keys(`${storeHash}-cache:${key}`);
                for (const k of keys) {
                    client.del(k);
                }
            } else {
                await client.del(`${storeHash}-cache:${key}`);
            }
        },
    });

    return storage;
}
