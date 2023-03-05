import { ApiClient } from "../api-client";
import { ProductVideo } from "../model/product";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
export declare class ProductVideoApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllVideos<Params extends FieldAwareQueryParams, T extends ProductVideo>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createVideo<T extends ProductVideo>(productId: number, video: T): Promise<Data<T>>;
    getVideo<T extends ProductVideo, Params extends FieldAwareQueryParams>(productId: number, videoId: number, params?: Params): Promise<Data<T>>;
    updateVideo<T extends ProductVideo>(productId: number, video: T): Promise<Data<T>>;
    deleteVideo(productId: number, videoId: number): Promise<void>;
}
