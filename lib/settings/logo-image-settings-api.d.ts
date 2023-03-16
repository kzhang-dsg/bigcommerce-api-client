/// <reference types="node" />
import { ReadStream } from "fs";
import { ApiClient } from "../api-client";
export declare class LogoImageSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    createLogoImage(image: ReadStream, channelId?: number): Promise<void>;
}
