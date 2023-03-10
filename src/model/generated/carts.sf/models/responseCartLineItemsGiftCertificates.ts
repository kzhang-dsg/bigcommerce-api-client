/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { responseCartLineItemsGiftCertificatesRecipient } from './responseCartLineItemsGiftCertificatesRecipient';
import type { responseCartLineItemsGiftCertificatesSender } from './responseCartLineItemsGiftCertificatesSender';

export type responseCartLineItemsGiftCertificates = {
    /**
     * Value must be between 1.00 and 1,000.00 in the storeʼs default currency.
     */
    amount: number;
    /**
     * ID of this gift certificate.
     */
    id?: string;
    /**
     * Whether or not the gift certificate is taxable.
     */
    isTaxable?: boolean;
    /**
     * Message that will be sent to the gift certificate's recipient. Limited to 200 characters.
     */
    message?: string;
    /**
     * GiftCertificate-provided name that will appear in the control panel.
     */
    name?: string;
    recipient: responseCartLineItemsGiftCertificatesRecipient;
    sender: responseCartLineItemsGiftCertificatesSender;
    /**
     * Currently supports `Birthday`, `Boy`, `Celebration`, `Christmas`, `General`, and `Girl`.
     */
    theme: string;
};

