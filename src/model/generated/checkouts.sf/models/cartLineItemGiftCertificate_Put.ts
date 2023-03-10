/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { contactEntity } from './contactEntity';

export type cartLineItemGiftCertificate_Put = {
    /**
     * Currently supports `Birthday`, `Boy`, `Celebration`, `Christmas`, `General`, and `Girl`.
     */
    theme: string;
    amount: number;
    sender: contactEntity;
    recipient: contactEntity;
    /**
     * Message shown to recipient, as provided by sender.
     */
    message?: string;
    quantity: number;
};

