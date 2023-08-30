import FormData from "form-data";
import { ReadStream } from "fs";

import { ApiClient } from "../api-client";
import { Data, Limit, PaginatedData } from "../model/common";
import { JobId, Theme } from "../model/generated/themes.v3";
import { ThemeActionApi } from "./theme-action-api";
import { ThemeConfigurationApi } from "./theme-configuration-api";
import { ThemeCustomTemplateApi } from "./theme-custom-template-api";
import { ThemeJobApi } from "./theme-job-api";

export class ThemesApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly themeActions = new ThemeActionApi(this.apiClient);
    readonly themeConfiguration = new ThemeConfigurationApi(this.apiClient);
    readonly themeCustomTemplates = new ThemeCustomTemplateApi(this.apiClient);
    readonly themeJobs = new ThemeJobApi(this.apiClient);

    async getAllTheme<T extends Theme>(
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            "/v3/themes",
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async uploadTheme<T extends JobId>(theme: ReadStream): Promise<T> {
        const formData = new FormData();
        formData.append("file", theme);
        const response = await this.apiClient.post("/v3/themes", formData, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });
        return response.data;
    }

    async getTheme<T extends Theme>(themeUuid: string): Promise<Data<T>> {
        const response = await this.apiClient.get(`/v3/themes/${themeUuid}`);
        return response.data;
    }

    async deleteTheme(themeUuid: string): Promise<void> {
        await this.apiClient.delete(`/v3/themes/${themeUuid}`);
    }
}
