export type customerLoginSSO = {
    /**
     * Indicates the token’s issuer. This is your application’s client ID, which is obtained during application registration in Developer Portal.
     */
    iss?: string;
    /**
     * Time when the token was generated. This is a numeric value indicating the number of seconds since the [Unix epoch](https://en.wikipedia.org/wiki/Unix_time).
     */
    iat?: number;
    /**
     * Request ID string that must be unique across all requests made by your app. A UUID or other random string would be an appropriate value. Most libraries contain a method for generating a uuid. For testing a [UUID generator](https://www.uuidgenerator.net/) can be used, but it recommended to use built in libraries.
     */
    jti?: string;
    /**
     * Must contain the string “customer_login”.
     */
    operation?: string;
    /**
     * Store hash identifying the store you are logging into.
     *
     */
    store_hash?: string;
    /**
     * ID of the customer you are logging in, as obtained through the Customer API.
     *
     */
    customer_id?: number;
    /**
     * Optional field containing a relative path for the shopper’s destination after login. Will default to `/account.php`.
     *
     */
    redirect_to?: string;
    /**
     * **(Optional)** Field containing the expected IP address for the request. If provided, BigCommerce will check that it matches the browser trying to log in. If there is not a match, it will be rejected.
     *
     */
    request_ip?: string;
};
