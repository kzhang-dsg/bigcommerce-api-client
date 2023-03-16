import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import { subscriber_Full, subscriber_Post, subscriber_Put } from "../model/generated/subscribers.v3";
import { DeleteSubscribersQueryParams, SubscribersQueryParams } from "../model/query/subscriber";
export declare class SubscribersApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getSubscribers<Params extends SubscribersQueryParams, T extends subscriber_Full>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createSubscriber<T extends subscriber_Post, R extends subscriber_Full>(subscriber: T): Promise<Data<R>>;
    deleteSubscribers<Params extends DeleteSubscribersQueryParams>(params?: Params): Promise<void>;
    getSubscriber<T extends subscriber_Full>(subscriberId: number): Promise<Data<T>>;
    updateSubscriber<T extends subscriber_Put, R extends subscriber_Full>(subscriberId: number, subscriber: T): Promise<Data<R>>;
    deleteSubscriber(subscriberId: number): Promise<void>;
}
