import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import { wishlist_Full, wishlist_Post, wishlist_Put } from "../model/generated/wishlists.v3";
import { WishlistsQueryParams } from "../model/query/wishlist";
import { WishlistItemApi } from "./wishlist-item-api";
export declare class WishlistsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly wishlistItems: WishlistItemApi;
    getAllWishlists<Params extends WishlistsQueryParams, T extends wishlist_Full>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createWishlist<T extends wishlist_Post, R extends wishlist_Full>(wishlist: T): Promise<Data<R>>;
    getWishlist<T extends wishlist_Full>(wishlistId: number): Promise<Data<T>>;
    updateWishlist<T extends wishlist_Put, R extends wishlist_Full>(wishlistId: number, wishlist: T): Promise<Data<R>>;
    deleteWishlist(wishlistId: number): Promise<void>;
}
