/**
 * `Price List Assignments` object used in a batch create request.
 */
export type AssignmentsForRequest = {
    /**
     * Price list ID for assignment.
     */
    price_list_id: number;
    /**
     * Customer group ID for assignment.
     */
    customer_group_id?: number;
    /**
     * Channel ID for assignment
     */
    channel_id?: number;
};
