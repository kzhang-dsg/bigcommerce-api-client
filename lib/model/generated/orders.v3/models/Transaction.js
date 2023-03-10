"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
var Transaction;
(function (Transaction) {
    /**
     * Store event that created the transaction.
     *
     */
    let event;
    (function (event) {
        event["PURCHASE"] = "purchase";
        event["AUTHORIZATION"] = "authorization";
        event["CAPTURE"] = "capture";
        event["REFUND"] = "refund";
        event["VOID"] = "void";
        event["PENDING"] = "pending";
        event["SETTLED"] = "settled";
    })(event = Transaction.event || (Transaction.event = {}));
    /**
     * The payment method: `credit_card` - a credit-card transaction; `electronic_wallet` - an online wallet; `store_credit` - a transaction using store credit; `gift_certificate` - a transaction using a gift certificate; `custom` - manual payment methods; `token` - payment token; `nonce` - temporary payment token; `offsite` - online payment off the site; `offline` - payment method that takes place offline.
     *
     */
    let method;
    (function (method) {
        method["CREDIT_CARD"] = "credit_card";
        method["ELECTRONIC_WALLET"] = "electronic_wallet";
        method["GIFT_CERTIFICATE"] = "gift_certificate";
        method["STORE_CREDIT"] = "store_credit";
        method["APPLE_PAY_CARD"] = "apple_pay_card";
        method["BIGPAY_TOKEN"] = "bigpay_token";
        method["APPLE_PAY_TOKEN"] = "apple_pay_token";
        method["TOKEN"] = "token";
        method["CUSTOM"] = "custom";
        method["OFFSITE"] = "offsite";
        method["OFFLINE"] = "offline";
        method["NONCE"] = "nonce";
    })(method = Transaction.method || (Transaction.method = {}));
    /**
     * The payment gateway, where applicable.
     *
     */
    let gateway;
    (function (gateway) {
        gateway["_2CHECKOUT"] = "2checkout";
        gateway["ADYEN"] = "adyen";
        gateway["AMAZON"] = "amazon";
        gateway["AUTHORIZENET"] = "authorizenet";
        gateway["BANKDEPOSIT"] = "bankdeposit";
        gateway["BRAINTREE"] = "braintree";
        gateway["CHEQUE"] = "cheque";
        gateway["COD"] = "cod";
        gateway["CUSTOM"] = "custom";
        gateway["FIRSTDATAGGE4"] = "firstdatagge4";
        gateway["GIFTCERTIFICATE"] = "giftcertificate";
        gateway["HPS"] = "hps";
        gateway["INSTORE"] = "instore";
        gateway["KLARNA"] = "klarna";
        gateway["MIGS"] = "migs";
        gateway["MONEYORDER"] = "moneyorder";
        gateway["NMI"] = "nmi";
        gateway["PAYPALEXPRESS"] = "paypalexpress";
        gateway["PAYPALPAYMENTSPROUS"] = "paypalpaymentsprous";
        gateway["PAYPALPAYMENTSPROUK"] = "paypalpaymentsprouk";
        gateway["PLUGNPAY"] = "plugnpay";
        gateway["QBMSV2"] = "qbmsv2";
        gateway["SECURENET"] = "securenet";
        gateway["SQUARE"] = "square";
        gateway["STORECREDIT"] = "storecredit";
        gateway["STRIPE"] = "stripe";
        gateway["TESTGATEWAY"] = "testgateway";
        gateway["USAEPAY"] = "usaepay";
    })(gateway = Transaction.gateway || (Transaction.gateway = {}));
    /**
     * Status of the transaction.
     *
     */
    let status;
    (function (status) {
        status["OK"] = "ok";
        status["ERROR"] = "error";
    })(status = Transaction.status || (Transaction.status = {}));
})(Transaction = exports.Transaction || (exports.Transaction = {}));
