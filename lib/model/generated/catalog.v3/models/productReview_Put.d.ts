/**
 * The model for a PUT to update a product review.
 *
 */
export type productReview_Put = {
    /**
     * The title for the product review.
     * Required in /POST.
     */
    title: string;
    /**
     * The text for the product review.
     *
     */
    text?: string;
    /**
     * The status of the product review. Must be one of `approved`, `disapproved` or `pending`.
     *
     */
    status?: string;
    /**
     * The rating of the product review. Must be one of 0, 1, 2, 3, 4, 5.
     */
    rating?: number;
    /**
     * The email of the reviewer. Must be a valid email, or an empty string.
     */
    email?: string;
    /**
     * The name of the reviewer.
     */
    name?: string;
    /**
     * Date the product was reviewed. Required in /POST.
     *
     */
    date_reviewed: string;
};
