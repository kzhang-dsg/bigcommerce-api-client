/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Not returned in any responses, but accepts up to two fields allowing you to set the customer’s password. If a password is not supplied, it is generated automatically. For further information about using this object, please see the Customers resource documentation.
 */
export type authentication = {
    force_reset?: string;
    password?: string;
    password_confirmation?: string;
};

