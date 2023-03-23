import type { orderProduct_Put } from './orderProduct_Put';
import type { pickupConsignment_Base } from './pickupConsignment_Base';
import type { pickupConsignmentLocation_Put } from './pickupConsignmentLocation_Put';
export type pickupConsignment_Put = ({
    /**
     * ID of the pickup consignment to update.
     */
    id: number;
    /**
     * ID of the pickup method.
     */
    pickup_method_id?: number;
} & pickupConsignment_Base & {
    location?: pickupConsignmentLocation_Put;
    line_items?: Array<orderProduct_Put>;
});
