/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ItemCustomGet } from './ItemCustomGet';
import type { ItemDigitalGet } from './ItemDigitalGet';
import type { ItemGiftCertificateGet } from './ItemGiftCertificateGet';
import type { ItemPhysicalGet } from './ItemPhysicalGet';

/**
 * `GET`
 */
export type LineItemsGet = {
    physical_items?: Array<ItemPhysicalGet>;
    digital_items?: Array<ItemDigitalGet>;
    gift_certificates?: Array<ItemGiftCertificateGet>;
    custom_items?: Array<ItemCustomGet>;
};

