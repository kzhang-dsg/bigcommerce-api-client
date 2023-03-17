import type { subscriber_Base } from './subscriber_Base';
/**
 * Full subscriber object returned in responses.
 */
export type subscriber_Full = (subscriber_Base & {
    /**
     * The unique numeric ID of the subscriber; increments sequentially.
     */
    id?: number;
    /**
     * The date on which the subscriber was modified.
     *
     */
    date_modified?: Date;
    /**
     * The date of which the subscriber was created.
     *
     */
    date_created?: Date;
});
