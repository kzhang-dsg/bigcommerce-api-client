import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { EnabledTransactionalEmails } from "../model/generated/settings.v3";
export declare class EmailSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getTransactionalEmailSettings<Params extends ChannelIdQueryParams, T extends EnabledTransactionalEmails>(params?: Params): Promise<Data<T>>;
    updateTransactionalEmailSettings<Params extends ChannelIdQueryParams, T extends EnabledTransactionalEmails>(emailSettings: T, params?: Params): Promise<Data<T>>;
}
