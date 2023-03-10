/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A gift-certificate model.
 */
export type giftCertificate_Full = {
    /**
     * The gift-certificate code.
     *
     */
    code?: string;
    /**
     * The balance on a gift certificate when it was purchased.
     *
     */
    original_balance?: number;
    /**
     * The balance on a gift certificate at the time of this purchase.
     *
     */
    starting_balance?: number;
    /**
     * The remaining balance on a gift certificate.
     *
     */
    remaining_balance?: number;
    /**
     * The status of a gift certificate: `active` - gift certificate is active; `pending` - gift certificate purchase is pending; `disabled` - gift certificate is disabled; `expired` - gift certificate is expired.
     *
     */
    status?: giftCertificate_Full.status;
};

export namespace giftCertificate_Full {

    /**
     * The status of a gift certificate: `active` - gift certificate is active; `pending` - gift certificate purchase is pending; `disabled` - gift certificate is disabled; `expired` - gift certificate is expired.
     *
     */
    export enum status {
        ACTIVE = 'active',
        PENDING = 'pending',
        DISABLED = 'disabled',
        EXPIRED = 'expired',
    }


}

