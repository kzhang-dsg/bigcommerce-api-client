import { ApiClient } from "../api-client";
import { CustomsInformationApi } from "./customs-information-api";

export class ShippingV3Api {
    constructor(private readonly apiClient: ApiClient) {}

    readonly customsInformation = new CustomsInformationApi(this.apiClient);
}
