import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import { script_Full, script_Post, script_Put } from "../model/generated/scripts.v3";
import { ScriptsQueryParams } from "../model/query/script";
export declare class ScriptsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    createScript<T extends script_Post, R extends script_Full>(script: T): Promise<Data<R>>;
    getAllScripts<Params extends ScriptsQueryParams, T extends script_Full>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    getScript<T extends script_Full>(scriptUuid: string): Promise<Data<T>>;
    updateScript<T extends script_Put, R extends script_Full>(scriptUuid: string, script: T): Promise<Data<T>>;
    deleteScripts(scriptUuid: string): Promise<void>;
}
