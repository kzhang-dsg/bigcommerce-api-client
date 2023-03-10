import type { InstalledCertificateDetail } from './InstalledCertificateDetail';
import type { MetaOpen } from './MetaOpen';
export type CertificateResponse = {
    data?: {
        status?: CertificateResponse.status;
        installed_certificate?: InstalledCertificateDetail;
    };
    meta?: MetaOpen;
};
export declare namespace CertificateResponse {
    enum status {
        SHARED = "shared",
        DEDICATED = "dedicated"
    }
}
