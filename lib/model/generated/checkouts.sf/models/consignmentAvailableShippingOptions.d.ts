import type { consignmentShippingOption_Base } from './consignmentShippingOption_Base';
export type consignmentAvailableShippingOptions = (consignmentShippingOption_Base & {
    /**
     * Is this shipping method the recommended shipping option or not.
     */
    isRecommended?: boolean;
    additionalDescription?: string;
});
