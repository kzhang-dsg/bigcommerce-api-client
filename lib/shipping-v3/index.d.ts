import { ApiClient } from "../api-client";
import { CustomsInformationApi } from "./customs-information-api";
export declare class ShippingV3Api {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly customsInformation: CustomsInformationApi;
}
