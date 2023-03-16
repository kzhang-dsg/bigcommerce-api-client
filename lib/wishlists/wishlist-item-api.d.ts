import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { wishlistItem_Full, wishlistItem_Post } from "../model/generated/wishlists.v3";
export declare class WishlistItemApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    deleteWishlistItem(wishlistId: number, wishlistItemId: number): Promise<void>;
    addWishlistItem<T extends wishlistItem_Post, R extends wishlistItem_Full>(wishlistId: number, wishlistItem: T): Promise<Data<R>>;
}
