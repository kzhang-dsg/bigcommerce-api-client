import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { Job } from "../model/generated/themes.v3";
export declare class ThemeJobApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getThemeJob<T extends Job>(jobId: number): Promise<Data<T>>;
}
