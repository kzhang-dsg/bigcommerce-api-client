import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { CartSettings } from "../model/generated/carts.v3";
export declare class CartSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getGlobalCartSettings<T extends CartSettings>(): Promise<Data<T>>;
    updateGlobalCartSettings<T extends CartSettings>(cartSettings: T): Promise<Data<T>>;
    getChannelCartSettings<T extends CartSettings>(): Promise<Data<T>>;
    updateChannelCartSettings<T extends CartSettings>(channelId: number, cartSettings: T): Promise<Data<T>>;
}
