/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { responseCartLineItemsCustomItems } from './responseCartLineItemsCustomItems';
import type { responseCartLineItemsDigitalItems } from './responseCartLineItemsDigitalItems';
import type { responseCartLineItemsGiftCertificates } from './responseCartLineItemsGiftCertificates';
import type { responseCartLineItemsItemsPhysicalItemsItems } from './responseCartLineItemsItemsPhysicalItemsItems';

export type responseCartLineItems = {
    customItems?: Array<responseCartLineItemsCustomItems>;
    /**
     * Array of `ItemDigital` objects.
     */
    digitalItems?: Array<responseCartLineItemsDigitalItems>;
    /**
     * Array of `ItemGiftCertificate` objects.
     */
    giftCertificates?: Array<responseCartLineItemsGiftCertificates>;
    /**
     * Array of `ItemPhysical` objects.
     */
    physicalItems?: Array<responseCartLineItemsItemsPhysicalItemsItems>;
};

