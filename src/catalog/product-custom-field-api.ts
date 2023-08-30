import { ApiClient } from "../api-client";
import {
    Data,
    FieldAwareQueryParams,
    Limit,
    PaginatedData,
} from "../model/common";
import {
    productCustomField_Base,
    productCustomField_Post,
    productCustomField_Put,
} from "../model/generated/catalog.v3";
import { appendQueryString } from "../util";

export class ProductCustomFieldApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllCustomFields<
        Params extends FieldAwareQueryParams,
        T extends productCustomField_Base
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
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createCustomField<
        T extends productCustomField_Post,
        R extends productCustomField_Base
    >(productId: number, customField: T): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/custom-fields`,
            customField
        );
        return response.data;
    }

    async getCustomField<
        T extends productCustomField_Base,
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

    async updateCustomField<
        T extends productCustomField_Put,
        R extends productCustomField_Base
    >(
        productId: number,
        customFieldId: number,
        customField: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/custom-fields/${customFieldId}`,
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
