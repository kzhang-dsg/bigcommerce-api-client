import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { PutCheckoutUrl, Site } from "../model/generated/channels.v3";
export declare class ChannelSiteCheckoutUrlApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    upsertSiteCheckoutUrl<T extends PutCheckoutUrl, R extends Site>(channelId: number, checkoutUrl: T): Promise<Data<R>>;
    deleteSiteCheckoutUrl(channelId: number): Promise<void>;
}
