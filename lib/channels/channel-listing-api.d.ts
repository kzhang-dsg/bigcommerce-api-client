import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import { Listing } from "../model/generated/channels.v3";
import { ChannelListingsQueryParams } from "../model/query/channel";
export declare class ChannelListingApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getChannelListings<Params extends ChannelListingsQueryParams, T extends Listing>(channelId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createChannelListings<T extends Listing>(channelId: number, channelListings: T[]): Promise<PaginatedData<T>>;
    updateChannelListings<T extends Listing>(channelId: number, channelListings: T[]): Promise<PaginatedData<T>>;
    getChannelListing<T extends Listing>(channelId: number, listingId: number): Promise<Data<T>>;
}
