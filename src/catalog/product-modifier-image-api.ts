import { ApiClient } from "../api-client";
import { Data, Image } from "../model/common";
import FormData from "form-data";

export class ProductModifierImageApi {
    constructor(private readonly apiClient: ApiClient) {}

    async createImage<T extends Image>(
        productId: number,
        modifierId: number,
        valueId: number,
        image: T
    ): Promise<Data<T>> {
        const formData = new FormData();
        formData.append("image_file", image);
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/modifiers/${modifierId}/values/${valueId}/image`,
            formData,
            {
                headers: {
                    "content-type": "multipart/form-data",
                },
            }
        );
        return response.data;
    }
}
