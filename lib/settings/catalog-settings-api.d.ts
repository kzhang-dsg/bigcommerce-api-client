import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { CatalogSettings } from "../model/generated/settings.v3";
export declare class CatalogSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getCatalogSettings<T extends CatalogSettings>(channelId?: number): Promise<Data<T>>;
    updateCatalogSettings<T extends CatalogSettings>(catalogSettings: T, channelId?: number): Promise<Data<T>>;
}
