import type { InstalledCertificateDetail } from './InstalledCertificateDetail';
export type CertificateResponse = {
    data?: {
        status?: CertificateResponse.status;
        installed_certificate?: InstalledCertificateDetail;
    };
    meta?: any;
};
export declare namespace CertificateResponse {
    enum status {
        SHARED = "shared",
        DEDICATED = "dedicated"
    }
}
