import { ApiClient } from "../api-client";
import { Metafield, GetAllMetafieldsParams } from "../model/metafield";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
export declare class MetafieldApi {
    private readonly apiClient;
    private readonly baseUrl;
    constructor(apiClient: ApiClient, baseUrl: string);
    getAllMetafields<Params extends GetAllMetafieldsParams, T extends Metafield>(parentId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createMetafield<T extends Metafield>(parentId: number, metafield: T): Promise<Data<T>>;
    getMetafield<T extends Metafield, Params extends FieldAwareQueryParams>(parentId: number, metafieldId: number, params?: Params): Promise<Data<T>>;
    updateMetafield<T extends Metafield>(parentId: number, metafield: T): Promise<Data<T>>;
    deleteMetafield(parentId: number, metafieldId: number): Promise<void>;
}
