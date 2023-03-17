import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { CustomTemplate } from "../model/generated/themes.v3";

export class ThemeCustomTemplateApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getCustomTemplates<T extends CustomTemplate>(
        versionUuid: string,
        page?: number,
        limit?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/themes/custom-templates/${versionUuid}`,
            page,
            limit
        );
        return response.data;
    }
}
