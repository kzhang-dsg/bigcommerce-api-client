import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { abandonedCartInfo_Full } from "../model/generated/abandoned_carts.v3";
import { AbandonedCartSSettingsApi } from "./abandoned-cart-settings-api";
export declare class AbandonedCartApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly abandonedCartSSettings: AbandonedCartSSettingsApi;
    getAbandonedCart<T extends abandonedCartInfo_Full>(token: string): Promise<Data<T>>;
}
