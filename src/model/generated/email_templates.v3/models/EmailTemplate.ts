/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LocaleCollection } from './LocaleCollection';

/**
 * Data for a particular email template
 */
export type EmailTemplate = {
    type_id?: EmailTemplate.type_id;
    body?: string;
    translations?: LocaleCollection;
    subject?: string;
};

export namespace EmailTemplate {

    export enum type_id {
        ABANDONED_CART_EMAIL = 'abandoned_cart_email',
        ACCOUNT_DETAILS_CHANGED_EMAIL = 'account_details_changed_email',
        COMBINED_ORDER_STATUS_EMAIL = 'combined_order_status_email',
        CREATEACCOUNT_EMAIL = 'createaccount_email',
        CREATEGUESTACCOUNT_EMAIL = 'createguestaccount_email',
        GIFTCERTIFICATE_EMAIL = 'giftcertificate_email',
        INVOICE_EMAIL = 'invoice_email',
        ORDERMESSAGE_NOTIFICATION = 'ordermessage_notification',
        RETURN_CONFIRMATION_EMAIL = 'return_confirmation_email',
        RETURN_STATUSCHANGE_EMAIL = 'return_statuschange_email',
        PRODUCT_REVIEW_EMAIL = 'product_review_email',
        ACCOUNT_RESET_PASSWORD_EMAIL = 'account_reset_password_email',
    }


}

