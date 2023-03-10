import type { InstalledCertificateDetail } from './InstalledCertificateDetail';
import type { MetaOpen } from './MetaOpen';
export type GetCertificatesResponse = {
    data?: Array<InstalledCertificateDetail>;
    meta?: MetaOpen;
};
