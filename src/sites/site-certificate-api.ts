import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import {
    CertificateResponse,
    EmptyResponse,
    InstallCertificateData,
    InstalledCertificateDetail,
} from "../model/generated/sites.v3";
import { SiteCertificatesQueryParams } from "../model/query/site";
import { appendQueryString } from "../util";

export class SiteCertificateApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getSitesCertificateInformation<T extends CertificateResponse>(
        siteId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v3/sites/${siteId}/certificate`
        );
        return response.data;
    }

    async upsertSiteCertificateInformation<
        T extends InstallCertificateData,
        R extends EmptyResponse
    >(siteId: number, siteCertificate: T): Promise<R> {
        const response = await this.apiClient.put(
            `/v3/sites/${siteId}/certificate`,
            siteCertificate
        );

        return response.data;
    }

    async getSiteCertificates<
        Params extends SiteCertificatesQueryParams,
        T extends InstalledCertificateDetail
    >(params?: Params): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/sites/certificates`, params)
        );
        return response.data;
    }
}
