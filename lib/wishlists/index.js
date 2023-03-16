"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistsApi = void 0;
const util_1 = require("../util");
const wishlist_item_api_1 = require("./wishlist-item-api");
class WishlistsApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.wishlistItems = new wishlist_item_api_1.WishlistItemApi(this.apiClient);
    }
    getAllWishlists(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v3/wishlists", params), page, limit);
            return response.data;
        });
    }
    createWishlist(wishlist) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post("/v3/wishlists", wishlist);
            return response.data;
        });
    }
    getWishlist(wishlistId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/wishlists/${wishlistId}`);
            return response.data;
        });
    }
    updateWishlist(wishlistId, wishlist) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/wishlists/${wishlistId}`, wishlist);
            return response.data;
        });
    }
    deleteWishlist(wishlistId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v3/wishlists/${wishlistId}`);
        });
    }
}
exports.WishlistsApi = WishlistsApi;
