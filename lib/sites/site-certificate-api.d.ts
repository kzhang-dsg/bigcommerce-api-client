import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { CertificateResponse, EmptyResponse, InstallCertificateData, InstalledCertificateDetail } from "../model/generated/sites.v3";
import { SiteCertificatesQueryParams } from "../model/query/site";
export declare class SiteCertificateApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getSitesCertificateInformation<T extends CertificateResponse>(siteId: number): Promise<T>;
    upsertSiteCertificateInformation<T extends InstallCertificateData, R extends EmptyResponse>(siteId: number, siteCertificate: T): Promise<R>;
    getSiteCertificates<Params extends SiteCertificatesQueryParams, T extends InstalledCertificateDetail>(params?: Params): Promise<PaginatedData<T>>;
}
