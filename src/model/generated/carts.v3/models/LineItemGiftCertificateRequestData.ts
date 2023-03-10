/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LineItemGiftCertificateRequestData = {
    /**
     * Given name for gift certificate line item.
     */
    name: string;
    /**
     * The theme of the gift certificate.
     */
    theme: LineItemGiftCertificateRequestData.theme;
    amount: number;
    quantity: number;
    sender: {
        name?: string;
        email?: string;
    };
    recipient: {
        name?: string;
        email?: string;
    };
    /**
     * Message shown to recipient, as provided by sender.
     */
    message?: string;
};

export namespace LineItemGiftCertificateRequestData {

    /**
     * The theme of the gift certificate.
     */
    export enum theme {
        BIRTHDAY = 'Birthday',
        BOY = 'Boy',
        CELEBRATION = 'Celebration',
        CHRISTMAS = 'Christmas',
        GENERAL = 'General',
        GIRL = 'Girl',
    }


}

