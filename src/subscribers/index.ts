import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import {
    subscriber_Full,
    subscriber_Post,
    subscriber_Put,
} from "../model/generated/subscribers.v3";
import {
    DeleteSubscribersQueryParams,
    SubscribersQueryParams,
} from "../model/query/subscriber";
import { appendQueryString } from "../util";

export class SubscribersApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getSubscribers<
        Params extends SubscribersQueryParams,
        T extends subscriber_Full
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/customers/subscribers", params),
            page,
            limit
        );
        return response.data;
    }

    async createSubscriber<
        T extends subscriber_Post,
        R extends subscriber_Full
    >(subscriber: T): Promise<Data<R>> {
        const response = await this.apiClient.post(
            "/v3/customers/subscribers",
            subscriber
        );
        return response.data;
    }

    async deleteSubscribers<Params extends DeleteSubscribersQueryParams>(
        params?: Params
    ): Promise<void> {
        await this.apiClient.delete(
            appendQueryString("/v3/customers/subscribers", params)
        );
    }

    async getSubscriber<T extends subscriber_Full>(
        subscriberId: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/customers/subscribers/${subscriberId}`
        );
        return response.data;
    }

    async updateSubscriber<T extends subscriber_Put, R extends subscriber_Full>(
        subscriberId: number,
        subscriber: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/customers/subscribers/${subscriberId}`,
            subscriber
        );
        return response.data;
    }

    async deleteSubscriber(subscriberId: number): Promise<void> {
        await this.apiClient.delete(
            `/v3/customers/subscribers/${subscriberId}`
        );
    }
}
