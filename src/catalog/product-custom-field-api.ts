import { ApiClient } from "../api-client";
import { ProductCustomField } from "../model/product";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { appendQueryString } from "../util";

export class ProductCustomFieldApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllCustomFields<
        Params extends FieldAwareQueryParams,
        T extends ProductCustomField
    >(
        productId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/custom-fields`,
                params
            ),
            page,
            limit
        );
        return response.data;
    }

    async createCustomField<T extends ProductCustomField>(
        productId: number,
        customField: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/custom-fields`,
            customField
        );
        return response.data;
    }

    async getCustomField<
        T extends ProductCustomField,
        Params extends FieldAwareQueryParams
    >(
        productId: number,
        customFieldId: number,
        params?: Params
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/custom-fields/${customFieldId}`,
                params
            )
        );
        return response.data;
    }

    async updateCustomField<T extends ProductCustomField>(
        productId: number,
        customField: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/custom-fields/${customField.id}`,
            customField
        );
        return response.data;
    }

    async deleteCustomField(
        productId: number,
        customFieldId: number
    ): Promise<void> {
        await this.apiClient.delete(
            `/v3/catalog/products/${productId}/custom-fields/${customFieldId}`
        );
    }
}
