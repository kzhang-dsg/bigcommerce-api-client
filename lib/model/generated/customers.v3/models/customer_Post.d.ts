import type { customerAddresses_CustomerPost } from './customerAddresses_CustomerPost';
import type { customerAttributes_Base } from './customerAttributes_Base';
import type { customerAuthentication_PostPut } from './customerAuthentication_PostPut';
import type { CustomerStoredCreditAmounts } from './CustomerStoredCreditAmounts';
import type { formFieldValue } from './formFieldValue';
export type customer_Post = {
    /**
     * The email of the customer. Must be unique.
     */
    email: string;
    /**
     * The first name of the customer.
     */
    first_name: string;
    /**
     * The last name of the customer.
     */
    last_name: string;
    /**
     * The company of the customer.
     */
    company?: string;
    /**
     * The phone number of the customer.
     */
    phone?: string;
    /**
     * The customer notes.
     */
    notes?: string;
    /**
     * The tax exempt category code for the customer.
     */
    tax_exempt_category?: string;
    /**
     * ID of the group which this customer belongs to.
     */
    customer_group_id?: number;
    /**
     * Array of customer addresses. Limited to 10.
     */
    addresses?: Array<customerAddresses_CustomerPost>;
    /**
     * Array of customer attributes. Limited to 10.
     */
    attributes?: Array<customerAttributes_Base>;
    _authentication?: customerAuthentication_PostPut;
    /**
     * It determines if the customer is signed up to receive either product review or abandoned cart emails or receive both emails.
     */
    accepts_product_review_abandoned_cart_emails?: boolean;
    store_credit_amounts?: CustomerStoredCreditAmounts;
    /**
     * Channel ID of the customer that has created the form.
     */
    origin_channel_id?: number;
    /**
     * Array of channels the customer can access.
     */
    channel_ids?: Array<number>;
    /**
     * Array of form fields. Controlled by formfields parameter.
     *
     */
    form_fields?: Array<formFieldValue>;
};
