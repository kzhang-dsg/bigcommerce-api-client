import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { themeConfiguration_Full, themeConfiguration_Write } from "../model/generated/themes.v3";
import { ThemeConfigurationQueryParams } from "../model/query/theme";
export declare class ThemeConfigurationApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getThemeConfiguration<Params extends ThemeConfigurationQueryParams, T extends themeConfiguration_Full>(themeUuid: string, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    validateThemeConfiguration<T extends themeConfiguration_Write>(themeUuid: string, activate: T): Promise<boolean>;
}
