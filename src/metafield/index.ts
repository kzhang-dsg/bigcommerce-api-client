import { ApiClient } from "../api-client";
import { GetAllMetafieldsQueryParams } from "../model/query/metafield";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { appendQueryString } from "../util";
import { metafield_Full } from "../model/generated/catalog.v3";
import { metafield_Post, metafield_Put } from "../model/generated/channels.v3";

export class MetafieldApi {
    constructor(
        private readonly apiClient: ApiClient,
        private readonly baseUrl: string
    ) {}

    async getAllMetafields<
        Params extends GetAllMetafieldsQueryParams,
        T extends metafield_Full
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

    async createMetafield<T extends metafield_Post, R extends metafield_Full>(
        parentId: number,
        metafield: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `${this.baseUrl}/${parentId}/metafields`,
            metafield
        );
        return response.data;
    }

    async getMetafield<
        T extends metafield_Full,
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

    async updateMetafield<T extends metafield_Put, R extends metafield_Full>(
        parentId: number,
        metafieldId: number,
        metafield: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `${this.baseUrl}/${parentId}/metafields/${metafieldId}`,
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
