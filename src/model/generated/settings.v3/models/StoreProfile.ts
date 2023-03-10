/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressTypeEnumValues } from './AddressTypeEnumValues';

/**
 * The basic profile settings for a store, used to give the shopper information about the business from which they are purchasing.
 */
export type StoreProfile = {
    store_address?: string;
    store_address_type?: AddressTypeEnumValues;
    store_email?: string;
    store_name?: string;
    store_phone?: string;
};

