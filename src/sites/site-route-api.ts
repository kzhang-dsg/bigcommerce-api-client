import { ApiClient } from "../api-client";
import { PaginatedData, Data } from "../model/common";
import { siteRoute_Base, siteRoute_Full } from "../model/generated/sites.v3";
import { SiteRoutsQueryParams } from "../model/query/site";
import { appendQueryString } from "../util";

export class SiteRouteApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getSitesRoutes<
        Params extends SiteRoutsQueryParams,
        T extends siteRoute_Full
    >(
        siteId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/sites/${siteId}/routes`, params),
            page,
            limit
        );
        return response.data;
    }

    async createSiteRoute<T extends siteRoute_Base, R extends siteRoute_Full>(
        siteId: number,
        siteRoute: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `/v3/sites/${siteId}/routes`,
            siteRoute
        );
        return response.data;
    }

    async updateSiteRoutes<T extends siteRoute_Full>(
        siteId: number,
        siteRoutes: T[]
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.put(
            `/v3/sites/${siteId}/routes`,
            siteRoutes
        );
        return response.data;
    }

    async getSiteRoute<T extends siteRoute_Full>(
        siteId: number,
        routeId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v3/sites/${siteId}/routes/${routeId}`
        );
        return response.data;
    }

    async updateSiteRoute<T extends siteRoute_Base, R extends siteRoute_Full>(
        siteId: number,
        routeId: number,
        siteRoute: T
    ): Promise<PaginatedData<R>> {
        const response = await this.apiClient.put(
            `/v3/sites/${siteId}/routes/${routeId}`,
            siteRoute
        );
        return response.data;
    }

    async deleteSiteRoute(siteId: number, routeId: number): Promise<void> {
        await this.apiClient.delete(`/v3/sites/${siteId}/routes/${routeId}`);
    }
}
