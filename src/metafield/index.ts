import { ApiClient } from "../api-client";
import { Metafield, GetAllMetafieldsParams } from "../model/metafield";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { appendQueryString } from "../util";

export class MetafieldApi {
    constructor(
        private readonly apiClient: ApiClient,
        private readonly baseUrl: string
    ) {}

    async getAllMetafields<
        Params extends GetAllMetafieldsParams,
        T extends Metafield
    >(
        parentId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`${this.baseUrl}/${parentId}/metafields`, params),
            page,
            limit
        );
        return response.data;
    }

    async createMetafield<T extends Metafield>(
        parentId: number,
        metafield: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.post(
            `${this.baseUrl}/${parentId}/metafields`,
            metafield
        );
        return response.data;
    }

    async getMetafield<
        T extends Metafield,
        Params extends FieldAwareQueryParams
    >(
        parentId: number,
        metafieldId: number,
        params?: Params
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `${this.baseUrl}/${parentId}/metafields/${metafieldId}`,
                params
            )
        );
        return response.data;
    }

    async updateMetafield<T extends Metafield>(
        parentId: number,
        metafield: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `${this.baseUrl}/${parentId}/metafields/${metafield.id}`,
            metafield
        );
        return response.data;
    }

    async deleteMetafield(
        parentId: number,
        metafieldId: number
    ): Promise<void> {
        const response = await this.apiClient.delete(
            `${this.baseUrl}/${parentId}/metafields/${metafieldId}`
        );
    }
}
