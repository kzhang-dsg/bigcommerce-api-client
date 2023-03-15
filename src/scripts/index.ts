import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import {
    script_Full,
    script_Post,
    script_Put,
} from "../model/generated/scripts.v3";
import { ScriptsQueryParams } from "../model/query/script";
import { appendQueryString } from "../util";

export class ScriptsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async createScript<T extends script_Post, R extends script_Full>(
        script: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.post(
            "/v3/content/scripts",
            script
        );
        return response.data;
    }

    async getAllScripts<
        Params extends ScriptsQueryParams,
        T extends script_Full
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/content/scripts", params),
            page,
            limit
        );
        return response.data;
    }

    async getScript<T extends script_Full>(
        scriptUuid: string
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/content/scripts/${scriptUuid}`
        );
        return response.data;
    }

    async updateScript<T extends script_Put, R extends script_Full>(
        scriptUuid: string,
        script: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/content/scripts/${scriptUuid}`,
            script
        );
        return response.data;
    }

    async deleteScripts(scriptUuid: string): Promise<void> {
        await this.apiClient.delete(`/v3/content/scripts/${scriptUuid}`);
    }
}
