import type { billingAddress_Base } from './billingAddress_Base';
import type { formFields } from './formFields';
export type billingAddress_Put = (billingAddress_Base & {
    form_fields?: Array<formFields>;
});
