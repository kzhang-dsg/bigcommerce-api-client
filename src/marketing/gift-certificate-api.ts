import { ApiClient } from "../api-client";
import { Limit } from "../model/common";
import {
    giftCertificate_Full,
    giftCertificate_Post,
    giftCertificate_Put,
} from "../model/generated/marketing.v2";
import { GiftCertificatesQueryParams } from "../model/query/marketing";
import { appendQueryString } from "../util";

export class GiftCertificateApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllGiftCertificates<
        Params extends GiftCertificatesQueryParams,
        T extends giftCertificate_Full
    >(params?: Params, page?: number, limit?: number): Promise<T[]> {
        const response = await this.apiClient.get(
            appendQueryString("/v2/giftCertificates", params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createGiftCertificate<
        T extends giftCertificate_Post,
        R extends giftCertificate_Full
    >(giftCertificate: T): Promise<R> {
        const response = await this.apiClient.post(
            "/v2/giftCertificates",
            giftCertificate
        );
        return response.data;
    }

    async deleteGiftCertificates(): Promise<void> {
        await this.apiClient.delete("/v2/giftCertificates");
    }

    async getGiftCertificate<T extends giftCertificate_Full>(
        giftCertificateId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/giftCertificates/${giftCertificateId}`
        );
        return response.data;
    }

    async updateGiftCertificate<
        T extends giftCertificate_Put,
        R extends giftCertificate_Full
    >(giftCertificateId: number, giftCertificate: T): Promise<R> {
        const response = await this.apiClient.put(
            `/v2/giftCertificates/${giftCertificateId}`,
            giftCertificate
        );
        return response.data;
    }

    async deleteGiftCertificate(giftCertificateId: number): Promise<void> {
        await this.apiClient.delete(
            `/v2/giftCertificates/${giftCertificateId}`
        );
    }
}
