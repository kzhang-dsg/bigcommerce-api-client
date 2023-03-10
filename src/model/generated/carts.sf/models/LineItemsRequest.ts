/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { requestCartPostLineItem } from './requestCartPostLineItem';
import type { requestLineItemGiftCertificate } from './requestLineItemGiftCertificate';

/**
 * Cart object used in add items requests.
 */
export type LineItemsRequest = ({
    lineItems: Array<requestCartPostLineItem>;
} | {
    giftCertificates: Array<requestLineItemGiftCertificate>;
} | {
    lineItems: Array<requestCartPostLineItem>;
    giftCertificates: requestLineItemGiftCertificate;
});

