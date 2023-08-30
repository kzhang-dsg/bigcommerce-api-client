import { ApiClient } from "../api-client";
import { MetafieldApi } from "../metafield";
import {
    Data,
    IncludeQueryParams,
    Limit,
    PaginatedData,
} from "../model/common";
import {
    ChannelWithCurrencies,
    ChannelWithoutCurrencies,
    CreateChannelReq,
    UpdateChannelReq,
} from "../model/generated/channels.v3";
import { ChannelsQueryParams } from "../model/query/channel";
import { appendQueryString } from "../util";
import { ChannelActiveThemeApi } from "./channel-active-theme-api";
import { ChannelCurrencyAssignmentApi } from "./channel-currency-assignment-api";
import { ChannelListingApi } from "./channel-listing-api";
import { ChannelMenuApi } from "./channel-menu-api";
import { ChannelSiteApi } from "./channel-site-api";
import { ChannelSiteCheckoutUrlApi } from "./channel-site-checkout-url-api";

export class ChannelsApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly channelActiveTheme = new ChannelActiveThemeApi(this.apiClient);
    readonly channelCurrencyAssignments = new ChannelCurrencyAssignmentApi(
        this.apiClient
    );
    readonly channelListings = new ChannelListingApi(this.apiClient);
    readonly channelMenus = new ChannelMenuApi(this.apiClient);
    readonly channelMetafields = new MetafieldApi(
        this.apiClient,
        "/v3/channels"
    );
    readonly channelSite = new ChannelSiteApi(this.apiClient);
    readonly channelSiteCheckoutUrl = new ChannelSiteCheckoutUrlApi(
        this.apiClient
    );

    async getAllChannels<
        Params extends ChannelsQueryParams,
        T extends ChannelWithoutCurrencies
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/channels", params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createChannel<
        T extends CreateChannelReq,
        R extends ChannelWithoutCurrencies
    >(channel: T): Promise<Data<R>> {
        const response = await this.apiClient.post("/v3/channels", channel);
        return response.data;
    }

    async getChannel<
        Params extends IncludeQueryParams,
        T extends ChannelWithCurrencies
    >(params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/channels", params)
        );
        return response.data;
    }

    async updateChannel<
        T extends UpdateChannelReq,
        R extends ChannelWithoutCurrencies
    >(channel: T): Promise<Data<R>> {
        const response = await this.apiClient.put("/v3/channels", channel);
        return response.data;
    }
}
