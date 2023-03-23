import type { formFields } from './formFields';
import type { shippingAddress_Base } from './shippingAddress_Base';
export type shippingAddress_Put = (shippingAddress_Base & {
    form_fields?: Array<formFields>;
});
