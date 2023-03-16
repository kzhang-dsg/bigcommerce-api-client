/// <reference types="node" />
import { ReadStream } from "fs";
import { ApiClient } from "../api-client";
export declare class FaviconImageSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    createFaviconImage(image: ReadStream, channelId?: number): Promise<void>;
}
