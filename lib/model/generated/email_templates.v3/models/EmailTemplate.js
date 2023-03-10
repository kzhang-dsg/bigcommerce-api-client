"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTemplate = void 0;
var EmailTemplate;
(function (EmailTemplate) {
    let type_id;
    (function (type_id) {
        type_id["ABANDONED_CART_EMAIL"] = "abandoned_cart_email";
        type_id["ACCOUNT_DETAILS_CHANGED_EMAIL"] = "account_details_changed_email";
        type_id["COMBINED_ORDER_STATUS_EMAIL"] = "combined_order_status_email";
        type_id["CREATEACCOUNT_EMAIL"] = "createaccount_email";
        type_id["CREATEGUESTACCOUNT_EMAIL"] = "createguestaccount_email";
        type_id["GIFTCERTIFICATE_EMAIL"] = "giftcertificate_email";
        type_id["INVOICE_EMAIL"] = "invoice_email";
        type_id["ORDERMESSAGE_NOTIFICATION"] = "ordermessage_notification";
        type_id["RETURN_CONFIRMATION_EMAIL"] = "return_confirmation_email";
        type_id["RETURN_STATUSCHANGE_EMAIL"] = "return_statuschange_email";
        type_id["PRODUCT_REVIEW_EMAIL"] = "product_review_email";
        type_id["ACCOUNT_RESET_PASSWORD_EMAIL"] = "account_reset_password_email";
    })(type_id = EmailTemplate.type_id || (EmailTemplate.type_id = {}));
})(EmailTemplate = exports.EmailTemplate || (exports.EmailTemplate = {}));
