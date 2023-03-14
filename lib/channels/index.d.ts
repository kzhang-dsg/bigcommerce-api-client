import { ApiClient } from "../api-client";
import { MetafieldApi } from "../metafield";
import { Data, PaginatedData } from "../model/common";
import { ChannelWithCurrencies, ChannelWithoutCurrencies, CreateChannelReq, UpdateChannelReq } from "../model/generated/channels.v3";
import { ChannelsQueryParams, GetChannelQueryParams } from "../model/query/channel";
import { ChannelActiveThemeApi } from "./channel-active-theme-api";
import { ChannelCurrencyAssignmentApi } from "./channel-currency-assignment-api";
import { ChannelListingApi } from "./channel-listing-api";
import { ChannelMenuApi } from "./channel-menu-api";
import { ChannelSiteApi } from "./channel-site-api";
import { ChannelSiteCheckoutUrlApi } from "./channel-site-checkout-url-api";
export declare class ChannelsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly channelActiveTheme: ChannelActiveThemeApi;
    readonly channelCurrencyAssignments: ChannelCurrencyAssignmentApi;
    readonly channelListings: ChannelListingApi;
    readonly channelMenus: ChannelMenuApi;
    readonly channelMetafields: MetafieldApi;
    readonly channelSite: ChannelSiteApi;
    readonly channelSiteCheckoutUrl: ChannelSiteCheckoutUrlApi;
    getAllChannels<Params extends ChannelsQueryParams, T extends ChannelWithoutCurrencies>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createChannel<T extends CreateChannelReq, R extends ChannelWithoutCurrencies>(channel: T): Promise<Data<R>>;
    getChannel<Params extends GetChannelQueryParams, T extends ChannelWithCurrencies>(params?: Params): Promise<Data<T>>;
    updateChannel<T extends UpdateChannelReq, R extends ChannelWithoutCurrencies>(channel: T): Promise<Data<R>>;
}
