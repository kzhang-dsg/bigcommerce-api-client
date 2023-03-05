import { ApiClient } from "../api-client";
import { Data, Image } from "../model/common";
export declare class ImageApi {
    private readonly apiClient;
    private readonly baseUrl;
    constructor(apiClient: ApiClient, baseUrl: string);
    createImage<T extends Image>(parentId: number, image: T): Promise<Data<T>>;
    deleteImage(parentId: number): Promise<void>;
}
