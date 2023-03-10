import type { customer_Base } from './customer_Base';
export type customer_Full = ({
    /**
     * Unique numeric ID of this customer. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
     */
    id?: number;
    /**
     * Date on which the customer registered from the storefront or was created in the control panel. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
     */
    date_created?: string;
    /**
     * Date on which the customer updated their details in the storefront or was updated in the control panel. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
     *
     */
    date_modified?: string;
} & customer_Base);
