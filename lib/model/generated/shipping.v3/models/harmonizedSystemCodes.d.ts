/**
 * Key-value pairs that are commonly used in the following form:
 *
 * `countryISO2: '/^[0-9A-Za-z]{6,14}$/'`
 *
 * This key-value pair represents a country and the associated `hs_code` that applies to that country.
 *
 * You can also use the `ALL` key in place of an ISO2 key to specify that the `hs_code` applies to all countries. The `ALL` key can be combined with other countries in the `hs_code` object.
 */
export type harmonizedSystemCodes = {};
