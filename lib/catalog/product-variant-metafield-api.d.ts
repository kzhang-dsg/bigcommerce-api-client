import { ApiClient } from "../api-client";
import { Metafield, GetAllMetafieldsParams } from "../model/metafield";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
export declare class ProductVariantMetafieldApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllMetafields<Params extends GetAllMetafieldsParams, T extends Metafield>(productId: number, variantId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createMetafield<T extends Metafield>(productId: number, variantId: number, metafield: T): Promise<Data<T>>;
    getMetafield<T extends Metafield, Params extends FieldAwareQueryParams>(productId: number, variantId: number, metafieldId: number, params?: Params): Promise<Data<T>>;
    updateMetafield<T extends Metafield>(productId: number, variantId: number, metafield: T): Promise<Data<T>>;
    deleteMetafield(productId: number, variantId: number, metafieldId: number): Promise<void>;
}
