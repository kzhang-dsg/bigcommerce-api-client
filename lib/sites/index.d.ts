import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import { site_Full, site_Post, site_Put } from "../model/generated/channels.v3";
import { SitesQueryParams } from "../model/query/site";
import { SiteCertificateApi } from "./site-certificate-api";
import { SiteRouteApi } from "./site-route-api";
export declare class SitesApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly siteCertificate: SiteCertificateApi;
    readonly siteRoutes: SiteRouteApi;
    createSite<T extends site_Post, R extends site_Full>(site: T): Promise<Data<R>>;
    getAllSites<Params extends SitesQueryParams, T extends site_Full>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    getSite<T extends site_Full>(siteId: number): Promise<Data<T>>;
    updateSite<T extends site_Put, R extends site_Full>(siteId: number, site: T): Promise<Data<R>>;
    deleteSite(siteId: number): Promise<void>;
}
