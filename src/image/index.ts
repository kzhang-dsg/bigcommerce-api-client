import { ApiClient } from "../api-client";
import { Data, Image } from "../model/common";

export class ImageApiClient {
    constructor(
        private readonly apiClient: ApiClient,
        private readonly baseUrl: string
    ) {}

    async createImage<T extends Image>(
        parentId: number,
        image: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.post(
            `${this.baseUrl}/${parentId}/image`,
            image
        );
        return response.data;
    }

    async deleteImage(parentId: number): Promise<void> {
        await this.apiClient.delete(`${this.baseUrl}/${parentId}/image`);
    }
}
