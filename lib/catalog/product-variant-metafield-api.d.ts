import { ApiClient } from "../api-client";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { metafield_Full } from "../model/generated/catalog.v3";
import { metafield_Post, metafield_Put } from "../model/generated/channels.v3";
import { GetAllMetafieldsQueryParams } from "../model/query/metafield";
export declare class ProductVariantMetafieldApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllMetafields<Params extends GetAllMetafieldsQueryParams, T extends metafield_Full>(productId: number, variantId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createMetafield<T extends metafield_Post, R extends metafield_Full>(productId: number, variantId: number, metafield: T): Promise<Data<R>>;
    getMetafield<T extends metafield_Full, Params extends FieldAwareQueryParams>(productId: number, variantId: number, metafieldId: number, params?: Params): Promise<Data<T>>;
    updateMetafield<T extends metafield_Put, R extends metafield_Full>(productId: number, variantId: number, metafieldId: number, metafield: T): Promise<Data<R>>;
    deleteMetafield(productId: number, variantId: number, metafieldId: number): Promise<void>;
}
