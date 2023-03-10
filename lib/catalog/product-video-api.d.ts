import { ApiClient } from "../api-client";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { productVideo_Full, productVideo_Post, productVideo_Put } from "../model/generated/catalog.v3";
export declare class ProductVideoApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllVideos<Params extends FieldAwareQueryParams, T extends productVideo_Full>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createVideo<T extends productVideo_Post, R extends productVideo_Full>(productId: number, video: T): Promise<Data<R>>;
    getVideo<T extends productVideo_Full, Params extends FieldAwareQueryParams>(productId: number, videoId: number, params?: Params): Promise<Data<T>>;
    updateVideo<T extends productVideo_Put, R extends productVideo_Full>(productId: number, videoId: number, video: T): Promise<Data<R>>;
    deleteVideo(productId: number, videoId: number): Promise<void>;
}
