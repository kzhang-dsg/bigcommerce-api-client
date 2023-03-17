import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import {
    themeConfiguration_Full,
    themeConfiguration_Write,
} from "../model/generated/themes.v3";
import { ThemeConfigurationQueryParams } from "../model/query/theme";
import { appendQueryString } from "../util";

export class ThemeConfigurationApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getThemeConfiguration<
        Params extends ThemeConfigurationQueryParams,
        T extends themeConfiguration_Full
    >(
        themeUuid: string,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/themes/${themeUuid}/actions/configurations`,
                params
            ),
            page,
            limit
        );
        return response.data;
    }

    async validateThemeConfiguration<T extends themeConfiguration_Write>(
        themeUuid: string,
        activate: T
    ): Promise<boolean> {
        // throws error if invalid. Detailed errors in error.response.data: ErrorResponse object
        await this.apiClient.post(
            `/v3/themes/${themeUuid}/actions/validate`,
            activate
        );

        return true;
    }
}
