export type pickupConsignment_Base = {
    /**
     * A name for the pickup method that can be displayed to shoppers.
     */
    pickup_method_display_name?: string;
    /**
     * A message for shoppers explaining how to collect their pickup order.
     */
    collection_instructions?: string;
    /**
     * A message for shoppers indicating the estimated time their pickup order will be ready for collection.
     */
    collection_time_description?: string;
};
