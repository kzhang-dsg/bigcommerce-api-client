import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { themeRegion } from "../model/generated/widgets.v3";

export class RegionApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getThemeRegions<T extends themeRegion>(
        templateFile: string,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            `/v3/content/regions?template_file=${templateFile}`,
            page,
            limit
        );
        return response.data;
    }
}
