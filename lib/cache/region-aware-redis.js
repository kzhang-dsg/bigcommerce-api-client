"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildRegionAwareRedisStorage = void 0;
const axios_cache_interceptor_1 = require("axios-cache-interceptor");
const redis = __importStar(require("redis"));
const util_1 = require("../util");
function buildRegionAwareRedisStorage(cacheKeyPrefix, redisClientOptions, axiosRequestTimeout) {
    const client = redis.createClient(redisClientOptions);
    const storage = (0, axios_cache_interceptor_1.buildStorage)({
        find(key) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!client.isOpen) {
                    yield client.connect();
                }
                const result = yield client.get(`${cacheKeyPrefix}:${key}`);
                return result ? JSON.parse(result, util_1.parseDate) : undefined;
            });
        },
        set(key, value) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!client.isOpen) {
                    yield client.connect();
                }
                yield client.set(`${cacheKeyPrefix}:${key}`, JSON.stringify(value), {
                    PX: value.data === undefined
                        ? axiosRequestTimeout
                        : value.ttl || axiosRequestTimeout,
                });
            });
        },
        remove(key) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!client.isOpen) {
                    yield client.connect();
                }
                if (key.endsWith("*")) {
                    const keys = yield client.keys(`${cacheKeyPrefix}:${key}`);
                    if (keys.length) {
                        client.del(keys);
                    }
                }
                else {
                    yield client.del(`${cacheKeyPrefix}:${key}`);
                }
            });
        },
    });
    return storage;
}
exports.buildRegionAwareRedisStorage = buildRegionAwareRedisStorage;
