/// <reference types="node" />
import { ApiClient } from "../api-client";
import { ProductImage } from "../model/product";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { ReadStream } from "fs";
export declare class ProductImageApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllImages<Params extends FieldAwareQueryParams, T extends ProductImage>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createImage<T extends ProductImage>(productId: number, image: T): Promise<Data<T>>;
    uploadImage<T extends ProductImage>(productId: number, image: ReadStream, imageId?: number): Promise<Data<T>>;
    getImage<T extends ProductImage, Params extends FieldAwareQueryParams>(productId: number, imageId: number, params?: Params): Promise<Data<T>>;
    updateImage<T extends ProductImage>(productId: number, image: T): Promise<Data<T>>;
    deleteImage(productId: number, imageId: number): Promise<void>;
}
