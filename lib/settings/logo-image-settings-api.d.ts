/// <reference types="node" />
import { ReadStream } from "fs";
import { ApiClient } from "../api-client";
import { ChannelIdQueryParams } from "../model/common";
export declare class LogoImageSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    createLogoImage<Params extends ChannelIdQueryParams>(image: ReadStream, params?: Params): Promise<void>;
}
