import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import { CurrencyNotRequiredWithChannelId, CurrencyRequiredWithoutChannelId, UpsertMultipleChannelsCurrencyAssignmentsReq } from "../model/generated/channels.v3";
export declare class ChannelCurrencyAssignmentApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllChannelsCurrencyAssignments<T extends CurrencyNotRequiredWithChannelId>(page?: number, limit?: number): Promise<PaginatedData<T>>;
    createMultipleChannelsCurrencyAssignments<T extends UpsertMultipleChannelsCurrencyAssignmentsReq, R extends CurrencyNotRequiredWithChannelId>(channelsCurrencyAssignments: T): Promise<PaginatedData<R>>;
    updateMultipleChannelsCurrencyAssignments<T extends UpsertMultipleChannelsCurrencyAssignmentsReq, R extends CurrencyNotRequiredWithChannelId>(channelsCurrencyAssignments: T): Promise<PaginatedData<R>>;
    getChannelCurrencyAssignments<T extends CurrencyNotRequiredWithChannelId>(channelId: number): Promise<Data<T>>;
    createChannelCurrencyAssignments<T extends CurrencyRequiredWithoutChannelId, R extends CurrencyNotRequiredWithChannelId>(channelId: number, channelCurrencyAssignments: T): Promise<Data<R>>;
    updateChannelCurrencyAssignments<T extends CurrencyRequiredWithoutChannelId, R extends CurrencyNotRequiredWithChannelId>(channelId: number, channelCurrencyAssignments: T): Promise<Data<R>>;
    deleteChannelCurrencyAssignments(channelId: number): Promise<void>;
}
