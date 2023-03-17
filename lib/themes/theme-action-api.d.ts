import { ApiClient } from "../api-client";
import { Activate, JobId, WhichThemeToDownload } from "../model/generated/themes.v3";
export declare class ThemeActionApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    downloadTheme<T extends WhichThemeToDownload, R extends JobId>(themeUuid: string, whichThemeToDownload: T): Promise<R>;
    activateTheme<T extends Activate>(themeUuid: string, activate: T): Promise<void>;
}
