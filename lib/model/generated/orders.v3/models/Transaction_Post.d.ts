import type { Custom } from './Custom';
import type { Offline } from './Offline';
export type Transaction_Post = {
    /**
     * Store event that created the transaction.
     *
     */
    event: Transaction_Post.event;
    /**
     * The payment method: `credit_card` - a credit-card transaction; `electronic_wallet` - an online wallet; `store_credit` - a transaction using store credit; `gift_certificate` - a transaction using a gift certificate; `custom` - manual payment methods; `token` - payment token; `nonce` - temporary payment token; `offsite` - online payment off the site (e.g., PayPal); `offline` - payment method that takes place offline.
     *
     */
    method: Transaction_Post.method;
    /**
     * Amount of money in the transaction.
     *
     */
    amount: number;
    /**
     * Currency used for the transaction.
     *
     */
    currency: string;
    /**
     * The payment gateway, where applicable.
     *
     */
    gateway: Transaction_Post.gateway;
    /**
     * The transaction ID returned by the payment gateway for this transaction item.
     *
     */
    gateway_transaction_id?: string;
    /**
     * The date/time of the transaction.
     *
     */
    date_created?: Date;
    /**
     * True if the transaction performed was a test, or if the gateway is in test mode.
     *
     */
    test?: boolean;
    /**
     * Status of the transaction.
     *
     */
    status?: Transaction_Post.status;
    /**
     * Result of gateway fraud review, if any. Default is `false`.
     *
     */
    fraud_review?: boolean;
    /**
     * Identifier for an existing transaction upon which this transaction acts.
     *
     */
    reference_transaction_id?: number;
    offline?: Offline;
    custom?: Custom;
};
export declare namespace Transaction_Post {
    /**
     * Store event that created the transaction.
     *
     */
    enum event {
        PURCHASE = "purchase",
        AUTHORIZATION = "authorization",
        CAPTURE = "capture",
        REFUND = "refund",
        VOID = "void",
        PENDING = "pending",
        SETTLED = "settled"
    }
    /**
     * The payment method: `credit_card` - a credit-card transaction; `electronic_wallet` - an online wallet; `store_credit` - a transaction using store credit; `gift_certificate` - a transaction using a gift certificate; `custom` - manual payment methods; `token` - payment token; `nonce` - temporary payment token; `offsite` - online payment off the site (e.g., PayPal); `offline` - payment method that takes place offline.
     *
     */
    enum method {
        CREDIT_CARD = "credit_card",
        ELECTRONIC_WALLET = "electronic_wallet",
        GIFT_CERTIFICATE = "gift_certificate",
        STORE_CREDIT = "store_credit",
        APPLE_PAY_CARD = "apple_pay_card",
        APPLE_PAY_TOKEN = "apple_pay_token",
        BIGPAY_TOKEN = "bigpay_token",
        TOKEN = "token",
        CUSTOM = "custom",
        OFFSITE = "offsite",
        OFFLINE = "offline",
        NONCE = "nonce"
    }
    /**
     * The payment gateway, where applicable.
     *
     */
    enum gateway {
        _2CHECKOUT = "2checkout",
        ADYEN = "adyen",
        AMAZON = "amazon",
        AUTHORIZENET = "authorizenet",
        BANKDEPOSIT = "bankdeposit",
        BRAINTREE = "braintree",
        CHEQUE = "cheque",
        COD = "cod",
        CUSTOM = "custom",
        FIRSTDATAGGE4 = "firstdatagge4",
        GIFTCERTIFICATE = "giftcertificate",
        HPS = "hps",
        INSTORE = "instore",
        KLARNA = "klarna",
        MIGS = "migs",
        MONEYORDER = "moneyorder",
        NMI = "nmi",
        PAYPALEXPRESS = "paypalexpress",
        PAYPALPAYMENTSPROUS = "paypalpaymentsprous",
        PAYPALPAYMENTSPROUK = "paypalpaymentsprouk",
        PLUGNPAY = "plugnpay",
        QBMSV2 = "qbmsv2",
        SECURENET = "securenet",
        SQUARE = "square",
        STORECREDIT = "storecredit",
        STRIPE = "stripe",
        TESTGATEWAY = "testgateway",
        USAEPAY = "usaepay"
    }
    /**
     * Status of the transaction.
     *
     */
    enum status {
        OK = "ok",
        ERROR = "error"
    }
}
