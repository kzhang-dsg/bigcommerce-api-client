import type { CertificateWrite } from './CertificateWrite';
export type InstallCertificateData = {
    /**
     * URL for the site.
     */
    url?: string;
    certificate?: CertificateWrite;
};
