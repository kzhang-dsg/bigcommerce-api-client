import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import {
    CurrencyNotRequiredWithChannelId,
    CurrencyRequiredWithoutChannelId,
    UpsertMultipleChannelsCurrencyAssignmentsReq,
} from "../model/generated/channels.v3";

const MAX_BATCH_SIZE = 10;

export class ChannelCurrencyAssignmentApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllChannelsCurrencyAssignments<
        T extends CurrencyNotRequiredWithChannelId
    >(page?: number, limit?: number): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            "/v3/channels/currency-assignments",
            page,
            limit
        );
        return response.data;
    }

    async createMultipleChannelsCurrencyAssignments<
        T extends UpsertMultipleChannelsCurrencyAssignmentsReq,
        R extends CurrencyNotRequiredWithChannelId
    >(channelsCurrencyAssignments: T): Promise<PaginatedData<R>> {
        let result: PaginatedData<R> = { data: [], meta: {} };
        for (
            let i = 0;
            i < channelsCurrencyAssignments.length;
            i += MAX_BATCH_SIZE
        ) {
            const response = await this.apiClient.post(
                "/v3/channels/currency-assignments",
                channelsCurrencyAssignments.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data?.concat(response.data.data);
        }

        return result;
    }

    async updateMultipleChannelsCurrencyAssignments<
        T extends UpsertMultipleChannelsCurrencyAssignmentsReq,
        R extends CurrencyNotRequiredWithChannelId
    >(channelsCurrencyAssignments: T): Promise<PaginatedData<R>> {
        let result: PaginatedData<R> = { data: [], meta: {} };
        for (
            let i = 0;
            i < channelsCurrencyAssignments.length;
            i += MAX_BATCH_SIZE
        ) {
            const response = await this.apiClient.put(
                "/v3/channels/currency-assignments",
                channelsCurrencyAssignments.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data?.concat(response.data.data);
        }

        return result;
    }

    async getChannelCurrencyAssignments<
        T extends CurrencyNotRequiredWithChannelId
    >(channelId: number): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/channels/${channelId}/currency-assignments`
        );
        return response.data;
    }

    async createChannelCurrencyAssignments<
        T extends CurrencyRequiredWithoutChannelId,
        R extends CurrencyNotRequiredWithChannelId
    >(channelId: number, channelCurrencyAssignments: T): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `/v3/channels/${channelId}/currency-assignments`,
            channelCurrencyAssignments
        );
        return response.data;
    }

    async updateChannelCurrencyAssignments<
        T extends CurrencyRequiredWithoutChannelId,
        R extends CurrencyNotRequiredWithChannelId
    >(channelId: number, channelCurrencyAssignments: T): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/channels/${channelId}/currency-assignments`,
            channelCurrencyAssignments
        );
        return response.data;
    }

    async deleteChannelCurrencyAssignments(channelId: number): Promise<void> {
        await this.apiClient.delete(
            `/v3/channels/${channelId}/currency-assignments`
        );
    }
}
