import { ApiClient } from "../api-client";
import { Data, Limit, PaginatedData } from "../model/common";
import {
    wishlist_Full,
    wishlist_Post,
    wishlist_Put,
} from "../model/generated/wishlists.v3";
import { WishlistsQueryParams } from "../model/query/wishlist";
import { appendQueryString } from "../util";
import { WishlistItemApi } from "./wishlist-item-api";

export class WishlistsApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly wishlistItems = new WishlistItemApi(this.apiClient);

    async getAllWishlists<
        Params extends WishlistsQueryParams,
        T extends wishlist_Full
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/wishlists", params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createWishlist<T extends wishlist_Post, R extends wishlist_Full>(
        wishlist: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.post("/v3/wishlists", wishlist);
        return response.data;
    }

    async getWishlist<T extends wishlist_Full>(
        wishlistId: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/wishlists/${wishlistId}`
        );
        return response.data;
    }

    async updateWishlist<T extends wishlist_Put, R extends wishlist_Full>(
        wishlistId: number,
        wishlist: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/wishlists/${wishlistId}`,
            wishlist
        );
        return response.data;
    }

    async deleteWishlist(wishlistId: number): Promise<void> {
        await this.apiClient.delete(`/v3/wishlists/${wishlistId}`);
    }
}
