import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import { Listing } from "../model/generated/channels.v3";
import { ChannelListingsQueryParams } from "../model/query/channel";
import { appendQueryString } from "../util";

const MAX_BATCH_SIZE = 10;

export class ChannelListingApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getChannelsListings<
        Params extends ChannelListingsQueryParams,
        T extends Listing
    >(
        channelId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/channels/${channelId}/listings`, params),
            page,
            limit
        );
        return response.data;
    }

    async createChannelsListings<T extends Listing>(
        channelId: number,
        channelsListings: T[]
    ): Promise<PaginatedData<T>> {
        let result: PaginatedData<R> = { data: [], meta: {} };
        for (let i = 0; i < channelsListings.length; i += MAX_BATCH_SIZE) {
            const response = await this.apiClient.post(
                `/v3/channels/${channelId}/listings`,
                channelsListings.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data?.concat(response.data.data);
        }

        return result;
    }

    async updateChannelsListings<T extends Listing>(
        channelId: number,
        channelsListings: T[]
    ): Promise<PaginatedData<T>> {
        let result: PaginatedData<R> = { data: [], meta: {} };
        for (let i = 0; i < channelsListings.length; i += MAX_BATCH_SIZE) {
            const response = await this.apiClient.put(
                `/v3/channels/${channelId}/listings`,
                channelsListings.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data?.concat(response.data.data);
        }

        return result;
    }

    async getChannelListing<T extends Listing>(
        channelId: number,
        listingId: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/channels/${channelId}/listings/${listingId}`
        );
        return response.data;
    }
}
