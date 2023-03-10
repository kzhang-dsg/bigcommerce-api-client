/// <reference types="node" />
import { ApiClient } from "../api-client";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { ReadStream } from "fs";
import { productImage_Full, productImage_Post, productImage_Put } from "../model/generated/catalog.v3";
export declare class ProductImageApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllImages<Params extends FieldAwareQueryParams, T extends productImage_Full>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createImage<T extends productImage_Post, R extends productImage_Full>(productId: number, image: T): Promise<Data<R>>;
    uploadImage<T extends productImage_Full>(productId: number, image: ReadStream, imageId?: number): Promise<Data<T>>;
    getImage<T extends productImage_Full, Params extends FieldAwareQueryParams>(productId: number, imageId: number, params?: Params): Promise<Data<T>>;
    updateImage<T extends productImage_Put, R extends productImage_Full>(productId: number, imageId: number, image: T): Promise<Data<R>>;
    deleteImage(productId: number, imageId: number): Promise<void>;
}
