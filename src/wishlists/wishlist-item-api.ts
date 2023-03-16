import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import {
    wishlistItem_Full,
    wishlistItem_Post,
} from "../model/generated/wishlists.v3";

export class WishlistItemApi {
    constructor(private readonly apiClient: ApiClient) {}

    async deleteWishlistItem(
        wishlistId: number,
        wishlistItemId: number
    ): Promise<void> {
        await this.apiClient.delete(
            `/v3/wishlists/${wishlistId}/items/${wishlistItemId}`
        );
    }

    async addWishlistItem<
        T extends wishlistItem_Post,
        R extends wishlistItem_Full
    >(wishlistId: number, wishlistItem: T): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `/v3/wishlists/${wishlistId}/items`,
            wishlistItem
        );
        return response.data;
    }
}
