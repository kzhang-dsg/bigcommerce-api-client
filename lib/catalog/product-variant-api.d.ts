/// <reference types="node" />
import { ApiClient } from "../api-client";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { ReadStream } from "fs";
import { productVariant_Full, productVariant_Post, productVariant_Put, resourceImage_Full } from "../model/generated/catalog.v3";
export declare class ProductVariantApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllVariants<Params extends FieldAwareQueryParams, T extends productVariant_Full>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createVariant<T extends productVariant_Post, R extends productVariant_Full>(productId: number, variant: T): Promise<Data<R>>;
    getVariant<T extends productVariant_Full, Params extends FieldAwareQueryParams>(productId: number, variantId: number, params?: Params): Promise<Data<T>>;
    updateVariant<T extends productVariant_Put, R extends productVariant_Full>(productId: number, variantId: number, variant: T): Promise<Data<R>>;
    deleteVariant(productId: number, variantId: number): Promise<void>;
    createVariantImage<T extends resourceImage_Full>(productId: number, variantId: number, image: ReadStream): Promise<Data<T>>;
}
