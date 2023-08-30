import { ApiClient } from "../api-client";
import { Count, Limit } from "../model/common";
import {
    banner_Base,
    banner_Full,
    banner_Put,
} from "../model/generated/marketing.v2";
import { BannersQueryParams } from "../model/query/marketing";
import { appendQueryString } from "../util";

export class BannerApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllBanners<
        Params extends BannersQueryParams,
        T extends banner_Full
    >(params?: Params, page?: number, limit?: number): Promise<T[]> {
        const response = await this.apiClient.get(
            appendQueryString("/v2/banners", params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createBanner<T extends banner_Base, R extends banner_Full>(
        banner: T
    ): Promise<R> {
        const response = await this.apiClient.post("/v2/banners", banner);
        return response.data;
    }

    async deleteBanners(): Promise<void> {
        await this.apiClient.delete("/v2/banners");
    }

    async getBanner<T extends banner_Full>(bannerId: number): Promise<T> {
        const response = await this.apiClient.get(`/v2/banners/${bannerId}`);
        return response.data;
    }

    async updateBanner<T extends banner_Put, R extends banner_Full>(
        bannerId: number,
        banner: T
    ): Promise<R> {
        const response = await this.apiClient.put(
            `/v2/banners/${bannerId}`,
            banner
        );
        return response.data;
    }

    async deleteBanner(bannerId: number): Promise<void> {
        await this.apiClient.delete(`/v2/banners/${bannerId}`);
    }

    async getBannersCount<T extends Count>(): Promise<T> {
        const response = await this.apiClient.get("/v2/banners/count");
        return response.data;
    }
}
