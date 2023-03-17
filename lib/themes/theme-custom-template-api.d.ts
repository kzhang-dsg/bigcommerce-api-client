import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { CustomTemplate } from "../model/generated/themes.v3";
export declare class ThemeCustomTemplateApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getCustomTemplates<T extends CustomTemplate>(versionUuid: string, page?: number, limit?: number): Promise<Data<T>>;
}
