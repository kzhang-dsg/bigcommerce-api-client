import type { requestCartPostLineItem } from './requestCartPostLineItem';
import type { requestLineItemGiftCertificate } from './requestLineItemGiftCertificate';
export type requestLineItemPut = ({
    lineItem: requestCartPostLineItem;
} | {
    giftCertificates: requestLineItemGiftCertificate;
} | {
    lineItem: requestCartPostLineItem;
    giftCertificates: requestLineItemGiftCertificate;
});
