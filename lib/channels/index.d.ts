import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import { ChannelWithCurrencies, ChannelWithoutCurrencies, CreateChannelReq, UpdateChannelReq } from "../model/generated/channels.v3";
import { ChannelsQueryParams, GetChannelQueryParams } from "../model/query/channel";
import { ChannelCurrencyAssignmentApi } from "./channel-currency-assignment-api";
export declare class ChannelsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly channelCurrencyAssignments: ChannelCurrencyAssignmentApi;
    getAllChannels<Params extends ChannelsQueryParams, T extends ChannelWithoutCurrencies>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createChannel<T extends CreateChannelReq, R extends ChannelWithoutCurrencies>(channel: T): Promise<PaginatedData<R>>;
    getChannel<Params extends GetChannelQueryParams, T extends ChannelWithCurrencies>(params?: Params): Promise<Data<T>>;
    updateChannel<T extends UpdateChannelReq, R extends ChannelWithoutCurrencies>(channel: T): Promise<Data<R>>;
}
