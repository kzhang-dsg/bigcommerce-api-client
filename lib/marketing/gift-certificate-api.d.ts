import { ApiClient } from "../api-client";
import { giftCertificate_Full, giftCertificate_Post, giftCertificate_Put } from "../model/generated/marketing.v2";
import { GiftCertificatesQueryParams } from "../model/query/marketing";
export declare class GiftCertificateApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllGiftCertificates<Params extends GiftCertificatesQueryParams, T extends giftCertificate_Full>(params?: Params, page?: number, limit?: number): Promise<T[]>;
    createGiftCertificate<T extends giftCertificate_Post, R extends giftCertificate_Full>(giftCertificate: T): Promise<R>;
    deleteGiftCertificates(): Promise<void>;
    getGiftCertificate<T extends giftCertificate_Full>(giftCertificateId: number): Promise<T>;
    updateGiftCertificate<T extends giftCertificate_Put, R extends giftCertificate_Full>(giftCertificateId: number, giftCertificate: T): Promise<R>;
    deleteGiftCertificate(giftCertificateId: number): Promise<void>;
}
