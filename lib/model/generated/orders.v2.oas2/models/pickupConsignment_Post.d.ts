import type { orderProduct_Post } from './orderProduct_Post';
import type { pickupConsignment_Base } from './pickupConsignment_Base';
import type { pickupConsignmentLocation_Post } from './pickupConsignmentLocation_Post';
export type pickupConsignment_Post = ({
    /**
     * ID of the pickup method.
     */
    pickup_method_id: number;
} & pickupConsignment_Base & {
    location?: pickupConsignmentLocation_Post;
    line_items: Array<orderProduct_Post>;
});
