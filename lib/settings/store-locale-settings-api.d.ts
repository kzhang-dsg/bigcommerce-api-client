import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { Locale } from "../model/generated/settings.v3";
export declare class StoreLocaleSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getLocaleSettings<T extends Locale>(): Promise<Data<T>>;
    updateLocaleSettings<T extends Locale>(localeSettings: T): Promise<Data<T>>;
}
