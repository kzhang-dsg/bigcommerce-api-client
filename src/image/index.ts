import FormData from "form-data";
import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { resourceImage_Full } from "../model/generated/catalog.v3";

export class ImageApi {
    constructor(
        private readonly apiClient: ApiClient,
        private readonly baseUrl: string
    ) {}

    async createImage<T extends resourceImage_Full>(
        parentId: number,
        image: T
    ): Promise<Data<T>> {
        const formData = new FormData();
        formData.append("image_file", image);
        const response = await this.apiClient.post(
            `${this.baseUrl}/${parentId}/image`,
            formData,
            {
                headers: {
                    "content-type": "multipart/form-data",
                },
            }
        );
        return response.data;
    }

    async deleteImage(parentId: number): Promise<void> {
        await this.apiClient.delete(`${this.baseUrl}/${parentId}/image`);
    }
}
