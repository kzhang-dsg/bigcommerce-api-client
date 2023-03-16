import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { EnabledTransactionalEmails } from "../model/generated/settings.v3";
export declare class EmailSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getTransactionalEmailSettings<T extends EnabledTransactionalEmails>(channelId?: number): Promise<Data<T>>;
    updateTransactionalEmailSettings<T extends EnabledTransactionalEmails>(emailSettings: T, channelId?: number): Promise<Data<T>>;
}
