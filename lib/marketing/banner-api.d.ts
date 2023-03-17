import { ApiClient } from "../api-client";
import { Count } from "../model/common";
import { banner_Base, banner_Full, banner_Put } from "../model/generated/marketing.v2";
import { BannersQueryParams } from "../model/query/marketing";
export declare class BannerApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllBanners<Params extends BannersQueryParams, T extends banner_Full>(params?: Params, page?: number, limit?: number): Promise<T[]>;
    createBanner<T extends banner_Base, R extends banner_Full>(banner: T): Promise<R>;
    deleteBanners(): Promise<void>;
    getBanner<T extends banner_Full>(bannerId: number): Promise<T>;
    updateBanner<T extends banner_Put, R extends banner_Full>(bannerId: number, banner: T): Promise<R>;
    deleteBanner(bannerId: number): Promise<void>;
    getBannersCount<T extends Count>(): Promise<T>;
}
