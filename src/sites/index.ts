import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import { site_Full, site_Post, site_Put } from "../model/generated/channels.v3";
import { SitesQueryParams } from "../model/query/site";
import { appendQueryString } from "../util";
import { SiteCertificateApi } from "./site-certificate-api";
import { SiteRouteApi } from "./site-route-api";

export class SitesApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly siteCertificate = new SiteCertificateApi(this.apiClient);
    readonly siteRoutes = new SiteRouteApi(this.apiClient);

    async createSite<T extends site_Post, R extends site_Full>(
        site: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.post("/v3/sites", site);

        return response.data;
    }

    async getAllSites<Params extends SitesQueryParams, T extends site_Full>(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/sites", params),
            page,
            limit
        );
        return response.data;
    }

    async getSite<T extends site_Full>(siteId: number): Promise<Data<T>> {
        const response = await this.apiClient.get(`/v3/sites/${siteId}`);
        return response.data;
    }

    async updateSite<T extends site_Put, R extends site_Full>(
        siteId: number,
        site: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.put(`/v3/sites/${siteId}`, site);

        return response.data;
    }

    async deleteSite(siteId: number): Promise<void> {
        await this.apiClient.delete(`/v3/sites/${siteId}`);
    }
}
