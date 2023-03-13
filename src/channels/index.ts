import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import {
    ChannelWithCurrencies,
    ChannelWithoutCurrencies,
    CreateChannelReq,
    UpdateChannelReq,
} from "../model/generated/channels.v3";
import {
    ChannelsQueryParams,
    GetChannelQueryParams,
} from "../model/query/channel";
import { appendQueryString } from "../util";
import { ChannelCurrencyAssignmentApi } from "./channel-currency-assignment-api";

export class ChannelsApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly channelCurrencyAssignments = new ChannelCurrencyAssignmentApi(
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
            limit
        );
        return response.data;
    }

    async createChannel<
        T extends CreateChannelReq,
        R extends ChannelWithoutCurrencies
    >(channel: T): Promise<PaginatedData<R>> {
        const response = await this.apiClient.post("/v3/channels", channel);
        return response.data;
    }

    async getChannel<
        Params extends GetChannelQueryParams,
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
