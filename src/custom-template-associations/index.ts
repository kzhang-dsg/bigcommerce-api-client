import { ApiClient } from "../api-client";
import { Limit, PaginatedData } from "../model/common";
import {
    CustomTemplateAssociation,
    CustomTemplateAssociationUpsert,
} from "../model/generated/custom-template-associations.v3";
import {
    CustomTemplateAssociationsQueryParams,
    DeleteCustomTemplateAssociationsQueryParams,
} from "../model/query/custom-template-association";
import { appendQueryString } from "../util";

export class CustomTemplateAssociationsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getCustomTemplateAssociations<
        Params extends CustomTemplateAssociationsQueryParams,
        T extends CustomTemplateAssociation
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                "/v3/storefront/custom-template-associations",
                params
            ),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async upsertCustomTemplateAssociations<
        T extends CustomTemplateAssociationUpsert,
        R extends CustomTemplateAssociation
    >(redirects: T[]): Promise<PaginatedData<R>> {
        const response = await this.apiClient.put(
            "/v3/storefront/custom-template-associations",
            redirects
        );
        return response.data;
    }

    async deleteCustomTemplateAssociations<
        Params extends DeleteCustomTemplateAssociationsQueryParams
    >(params?: Params): Promise<void> {
        await this.apiClient.delete(
            appendQueryString(
                "/v3/storefront/custom-template-associations",
                params
            )
        );
    }
}
