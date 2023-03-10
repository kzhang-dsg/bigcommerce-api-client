/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ItemCustom } from './ItemCustom';
import type { ItemDigital } from './ItemDigital';
import type { ItemGiftCertificate } from './ItemGiftCertificate';
import type { ItemPhysical } from './ItemPhysical';

/**
 * Request body for `PUT` or `POST` requests.
 */
export type LineItems = {
    physical_items: Array<ItemPhysical>;
    digital_items: Array<ItemDigital>;
    gift_certificates?: Array<ItemGiftCertificate>;
    custom_items?: Array<ItemCustom>;
};

