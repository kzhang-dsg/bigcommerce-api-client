import type { CreditCard } from './CreditCard';
export type Transaction = ({
    /**
     * Store event that created the transaction.
     *
     */
    event: Transaction.event;
    /**
     * The payment method: `credit_card` - a credit-card transaction; `electronic_wallet` - an online wallet; `store_credit` - a transaction using store credit; `gift_certificate` - a transaction using a gift certificate; `custom` - manual payment methods; `token` - payment token; `nonce` - temporary payment token; `offsite` - online payment off the site; `offline` - payment method that takes place offline.
     *
     */
    method: Transaction.method;
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
    gateway: Transaction.gateway;
    /**
     * The transaction ID returned by the payment gateway for this transaction item.
     *
     */
    gateway_transaction_id?: string;
    /**
     * The datetime of the transaction.
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
    status?: Transaction.status;
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
    /**
     * Offline payment (e.g., check or purchase order).
     */
    offline?: {
        /**
         * Display name for the offline payment.
         *
         */
        display_name?: string;
    };
    /**
     * Custom payment from manual order.
     */
    custom?: {
        /**
         * Text entered for the payment method in the control panel.
         *
         */
        payment_method?: string;
    };
    /**
     * The payment method ID used for this transaction
     *
     */
    payment_method_id?: string;
} & {
    /**
     * Unique identifier for the transaction.
     *
     */
    id?: number;
    /**
     * Identifier for the BigCommerce Order with which this transaction is associated.
     *
     */
    order_id?: string;
    /**
     * The datetime of the transaction.
     *
     */
    date_created?: Date;
    /**
     * This field contains internal BigPay token for stored card that is then mapped to the actual third-party token. We currently do not offer a way to get third party tokens.These tokens are read-only and do not return any information about the payment.
     */
    payment_instrument_token?: string;
    /**
     * Address Verification Service (AVS) result from the payment gateway.
     */
    avs_result?: {
        /**
         * AVS code.
         */
        code?: string;
        /**
         * AVS message.
         */
        message?: string;
        /**
         * AVS Code for street matching result.
         */
        street_match?: string;
        /**
         * AVS Code for postal matching result.
         */
        postal_match?: string;
    };
    /**
     * Card Verification Value result from the payment gateway.
     */
    cvv_result?: {
        /**
         * CVV code.
         */
        code?: string;
        /**
         * CVV message.
         */
        message?: string;
    };
    credit_card?: CreditCard;
    /**
     * A gift-certificate model.
     */
    gift_certificate?: {
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
        status?: Transaction.status;
    };
    /**
     * A store credit model.
     *
     */
    store_credit?: {
        /**
         * Remaining balance of shopper's store credit.
         *
         */
        remaining_balance?: number;
    };
});
export declare namespace Transaction {
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
     * The payment method: `credit_card` - a credit-card transaction; `electronic_wallet` - an online wallet; `store_credit` - a transaction using store credit; `gift_certificate` - a transaction using a gift certificate; `custom` - manual payment methods; `token` - payment token; `nonce` - temporary payment token; `offsite` - online payment off the site; `offline` - payment method that takes place offline.
     *
     */
    enum method {
        CREDIT_CARD = "credit_card",
        ELECTRONIC_WALLET = "electronic_wallet",
        GIFT_CERTIFICATE = "gift_certificate",
        STORE_CREDIT = "store_credit",
        APPLE_PAY_CARD = "apple_pay_card",
        BIGPAY_TOKEN = "bigpay_token",
        APPLE_PAY_TOKEN = "apple_pay_token",
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
