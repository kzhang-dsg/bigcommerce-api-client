import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { CustomTemplateAssociation, CustomTemplateAssociationUpsert } from "../model/generated/custom-template-associations.v3";
import { CustomTemplateAssociationsQueryParams, DeleteCustomTemplateAssociationsQueryParams } from "../model/query/custom-template-association";
export declare class CustomTemplateAssociationsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getCustomTemplateAssociations<Params extends CustomTemplateAssociationsQueryParams, T extends CustomTemplateAssociation>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    upsertCustomTemplateAssociations<T extends CustomTemplateAssociationUpsert, R extends CustomTemplateAssociation>(redirects: T[]): Promise<PaginatedData<R>>;
    deleteCustomTemplateAssociations<Params extends DeleteCustomTemplateAssociationsQueryParams>(params?: Params): Promise<void>;
}
