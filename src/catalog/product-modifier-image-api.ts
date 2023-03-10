import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import FormData from "form-data";
import { resourceImage_Full } from "../model/generated/catalog.v3";

export class ProductModifierImageApi {
    constructor(private readonly apiClient: ApiClient) {}

    async createImage<T extends resourceImage_Full>(
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
