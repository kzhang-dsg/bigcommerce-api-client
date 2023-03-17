import { ApiClient } from "../api-client";
import {
    Activate,
    JobId,
    WhichThemeToDownload,
} from "../model/generated/themes.v3";

export class ThemeActionApi {
    constructor(private readonly apiClient: ApiClient) {}

    async downloadTheme<T extends WhichThemeToDownload, R extends JobId>(
        themeUuid: string,
        whichThemeToDownload: T
    ): Promise<R> {
        const response = await this.apiClient.post(
            `/v3/themes/${themeUuid}/actions/download`,
            whichThemeToDownload
        );
        return response.data;
    }

    async activateTheme<T extends Activate>(
        themeUuid: string,
        activate: T
    ): Promise<void> {
        await this.apiClient.post(
            `/v3/themes/${themeUuid}/actions/activate`,
            activate
        );
    }
}
