import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { resourceImage_Full } from "../model/generated/catalog.v3";
export declare class ImageApi {
    private readonly apiClient;
    private readonly baseUrl;
    constructor(apiClient: ApiClient, baseUrl: string);
    createImage<T extends resourceImage_Full>(parentId: number, image: T): Promise<Data<T>>;
    deleteImage(parentId: number): Promise<void>;
}
