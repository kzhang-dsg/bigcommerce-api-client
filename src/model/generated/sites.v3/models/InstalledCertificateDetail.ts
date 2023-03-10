/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Details about the installed certificate, including the raw certificate data, without the private key.
 */
export type InstalledCertificateDetail = {
    /**
     * Common Name on the TLS certificate.
     */
    common_name?: string;
    /**
     * Subject Alternative Names for which the certificate is also valid.
     */
    subject_alternative_names?: Array<string>;
    /**
     * When does the validity period of this certificate begin? RFC 3339.
     */
    validity_not_before?: string;
    /**
     * When does the validity period of this certificate end? If this date is in the past, the certificate has expired. RFC 3339.
     */
    validity_not_after?: string;
    /**
     * Signing algorithm used to sign the certificate.
     */
    signing_algorithm?: string;
    issuer?: string;
    /**
     * The primary certificate, as a string.
     */
    certificate?: string;
    /**
     * The intermediate certificate(s), as a string.
     */
    intermediate_certificates?: string;
};

