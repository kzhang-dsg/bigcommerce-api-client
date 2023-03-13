import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import { Listing } from "../model/generated/channels.v3";
import { ChannelListingsQueryParams } from "../model/query/channel";
export declare class ChannelListingApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getChannelsListings<Params extends ChannelListingsQueryParams, T extends Listing>(channelId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createChannelsListings<T extends Listing>(channelId: number, channelsListings: T[]): Promise<PaginatedData<T>>;
    updateChannelsListings<T extends Listing>(channelId: number, channelsListings: T[]): Promise<PaginatedData<T>>;
    getChannelListing<T extends Listing>(channelId: number, listingId: number): Promise<Data<T>>;
}
