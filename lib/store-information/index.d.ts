import { ApiClient } from "../api-client";
import { StoreInformation, timeStamp_Full } from "../model/generated/store_information.v2";
export declare class StoreInformationApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getStoreInformation<T extends StoreInformation>(): Promise<T>;
    getSystemTimestamp<T extends timeStamp_Full>(): Promise<T>;
}
