import type { MetafieldBase } from './MetafieldBase';
/**
 * Allows app partners to write custom data to various resources in the API.
 *
 */
export type Metafield = (MetafieldBase & {
    /**
     * The unique identifier for the metafield.
     */
    id?: number;
    /**
     * Date and time of the metafieldʼs creation.
     */
    date_created?: string;
    /**
     * Date and time when the metafield was last updated.
     */
    date_modified?: string;
});
