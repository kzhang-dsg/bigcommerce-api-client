import type { products_Resource } from './products_Resource';
export type giftCertificateConsignment_Get = {
    /**
     * The recipient email of the gift certificate.
     */
    recipient_email?: string;
    line_items?: Array<products_Resource>;
};
