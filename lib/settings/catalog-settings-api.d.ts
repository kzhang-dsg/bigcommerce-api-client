import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { CatalogSettings } from "../model/generated/settings.v3";
export declare class CatalogSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getCatalogSettings<Params extends ChannelIdQueryParams, T extends CatalogSettings>(params?: Params): Promise<Data<T>>;
    updateCatalogSettings<Params extends ChannelIdQueryParams, T extends CatalogSettings>(catalogSettings: T, params?: Params): Promise<Data<T>>;
}
