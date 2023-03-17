import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { AbandonedCartSettings } from "../model/generated/abandoned_cart_emails.v3";
export declare class EmailTemplateSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getTemplateSettings<Params extends ChannelIdQueryParams, T extends AbandonedCartSettings>(params?: Params): Promise<Data<T>>;
    updateTemplateSettings<Params extends ChannelIdQueryParams, T extends AbandonedCartSettings>(storefrontProductSettings: T, params?: Params): Promise<Data<T>>;
}
