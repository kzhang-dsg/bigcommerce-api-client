import type { customerAddress_Base } from './customerAddress_Base';
export type customerAddress_Full = ({
    /**
     * ID of this customer address. READ-ONLY
     */
    id?: number;
    /**
     * 2-letter ISO Alpha-2 code for the customer’s country. READ-ONLY
     */
    country_iso2?: string;
} & customerAddress_Base);
