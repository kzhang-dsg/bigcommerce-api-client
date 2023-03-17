import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { Job } from "../model/generated/themes.v3";

export class ThemeJobApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getThemeJob<T extends Job>(jobId: number): Promise<Data<T>> {
        const response = await this.apiClient.get(`/v3/themes/jobs/${jobId}`);
        return response.data;
    }
}
