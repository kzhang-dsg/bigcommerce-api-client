import { ApiClient } from "../api-client";
import {
    StoreInformation,
    timeStamp_Full,
} from "../model/generated/store_information.v2";

export class StoreInformationApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getStoreInformation<T extends StoreInformation>(): Promise<T> {
        const response = await this.apiClient.get(`/v2/store`);
        return response.data;
    }

    async getSystemTimestamp<T extends timeStamp_Full>(): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/time`,
            undefined,
            undefined,
            { cache: false } // disable cache for timestamp
        );
        return response.data;
    }
}
