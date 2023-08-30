import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import { siteRoute_Base, siteRoute_Full } from "../model/generated/sites.v3";
import { SiteRoutsQueryParams } from "../model/query/site";
export declare class SiteRouteApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getSitesRoutes<Params extends SiteRoutsQueryParams, T extends siteRoute_Full>(siteId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createSiteRoute<T extends siteRoute_Base, R extends siteRoute_Full>(siteId: number, siteRoute: T): Promise<Data<R>>;
    updateSiteRoutes<T extends siteRoute_Full>(siteId: number, siteRoutes: T[]): Promise<PaginatedData<T>>;
    getSiteRoute<T extends siteRoute_Full>(siteId: number, routeId: number): Promise<T>;
    updateSiteRoute<T extends siteRoute_Base, R extends siteRoute_Full>(siteId: number, routeId: number, siteRoute: T): Promise<PaginatedData<R>>;
    deleteSiteRoute(siteId: number, routeId: number): Promise<void>;
}
