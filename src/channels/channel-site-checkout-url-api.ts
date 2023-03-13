import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { PutCheckoutUrl, Site } from "../model/generated/channels.v3";

export class ChannelSiteCheckoutUrlApi {
    constructor(private readonly apiClient: ApiClient) {}

    async upsertSiteCheckoutUrl<T extends PutCheckoutUrl, R extends Site>(
        channelId: number,
        checkoutUrl: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/channels/${channelId}/site/checkout-url`,
            checkoutUrl
        );

        return response.data;
    }

    async deleteSiteCheckoutUrl(channelId: number): Promise<void> {
        await this.apiClient.delete(
            `/v3/channels/${channelId}/site/checkout-url`
        );
    }
}
