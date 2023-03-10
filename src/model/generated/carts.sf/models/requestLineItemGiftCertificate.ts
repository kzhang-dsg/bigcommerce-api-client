/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { requestLineItemGiftCertificateRecipient } from './requestLineItemGiftCertificateRecipient';
import type { requestLineItemGiftCertificateSender } from './requestLineItemGiftCertificateSender';

export type requestLineItemGiftCertificate = {
    /**
     * Gift-certificate amount.
     */
    amount: number;
    /**
     * Message shown to recipient, as provided by sender.
     */
    message?: string;
    /**
     * Name assigned to this gift-certificate line item.
     */
    name: string;
    /**
     * Quantity of this item.
     */
    quantity: number;
    recipient: requestLineItemGiftCertificateRecipient;
    sender: requestLineItemGiftCertificateSender;
    /**
     * Currently supports `Birthday`, `Boy`, `Celebration`, `Christmas`, `General`, and `Girl`.
     */
    theme: string;
};

