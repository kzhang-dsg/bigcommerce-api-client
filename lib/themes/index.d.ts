/// <reference types="node" />
import { ReadStream } from "fs";
import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import { JobId, Theme } from "../model/generated/themes.v3";
import { ThemeActionApi } from "./theme-action-api";
import { ThemeConfigurationApi } from "./theme-configuration-api";
import { ThemeCustomTemplateApi } from "./theme-custom-template-api";
import { ThemeJobApi } from "./theme-job-api";
export declare class ThemesApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly themeActions: ThemeActionApi;
    readonly themeConfiguration: ThemeConfigurationApi;
    readonly themeCustomTemplates: ThemeCustomTemplateApi;
    readonly themeJobs: ThemeJobApi;
    getAllTheme<T extends Theme>(page?: number, limit?: number): Promise<PaginatedData<T>>;
    uploadTheme<T extends JobId>(theme: ReadStream): Promise<T>;
    getTheme<T extends Theme>(themeUuid: string): Promise<Data<T>>;
    deleteTheme(themeUuid: string): Promise<void>;
}
