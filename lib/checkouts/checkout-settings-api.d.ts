import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { CheckoutsSettings } from "../model/generated/checkouts.v3";
export declare class CheckoutSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getCheckoutSettings<T extends CheckoutsSettings>(): Promise<Data<T>>;
    updateCheckoutSettings<T extends CheckoutsSettings>(checkoutSettings: T): Promise<Data<T>>;
}
