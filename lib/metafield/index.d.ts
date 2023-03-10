import { ApiClient } from "../api-client";
import { GetAllMetafieldsQueryParams } from "../model/query/metafield";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { metafield_Full } from "../model/generated/catalog.v3";
import { metafield_Post, metafield_Put } from "../model/generated/channels.v3";
export declare class MetafieldApi {
    private readonly apiClient;
    private readonly baseUrl;
    constructor(apiClient: ApiClient, baseUrl: string);
    getAllMetafields<Params extends GetAllMetafieldsQueryParams, T extends metafield_Full>(parentId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createMetafield<T extends metafield_Post, R extends metafield_Full>(parentId: number, metafield: T): Promise<Data<R>>;
    getMetafield<T extends metafield_Full, Params extends FieldAwareQueryParams>(parentId: number, metafieldId: number, params?: Params): Promise<Data<T>>;
    updateMetafield<T extends metafield_Put, R extends metafield_Full>(parentId: number, metafieldId: number, metafield: T): Promise<Data<R>>;
    deleteMetafield(parentId: number, metafieldId: number): Promise<void>;
}
