import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { AbandonedCartSettings } from "../model/generated/abandoned_carts.v3";
export declare class AbandonedCartSSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getGlobalAbandonedCartSettings<T extends AbandonedCartSettings>(): Promise<Data<T>>;
    updateGlobalAbandonedCartSettings<T extends AbandonedCartSettings>(abandonedCartSettings: T): Promise<Data<T>>;
    getChannelAbandonedCartSettings<T extends AbandonedCartSettings>(channelId: number): Promise<Data<T>>;
    updateChannelAbandonedCartSettings<T extends AbandonedCartSettings>(channelId: number, abandonedCartSettings: T): Promise<Data<T>>;
}
