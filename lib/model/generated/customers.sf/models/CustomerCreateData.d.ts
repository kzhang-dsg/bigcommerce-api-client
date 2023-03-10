import type { CustomFields } from './CustomFields';
export type CustomerCreateData = {
    /**
     * First name of customer
     */
    firstName?: string;
    /**
     * Last name of customer
     */
    lastName?: string;
    /**
     * Email of customer
     */
    email?: string;
    /**
     * Password of customer
     */
    password?: string;
    /**
     * Has customer provided consent to receive marketing emails.
     */
    acceptsMarketingEmails?: boolean;
    customFields?: Array<CustomFields>;
};
