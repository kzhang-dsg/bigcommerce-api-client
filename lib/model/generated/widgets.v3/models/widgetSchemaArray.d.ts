import type { widgetSchemaHidden } from './widgetSchemaHidden';
import type { widgetSchemaTab } from './widgetSchemaTab';
/**
 * **Array.** Use the **array** settings type to build collections of elements within the widget. Each element in the array can contain tabs, sections, and an entire schema.
 */
export type widgetSchemaArray = {
    type?: widgetSchemaArray.type;
    label?: string;
    id?: string;
    /**
     * number of elements in the list to display by default.
     */
    defaultCount?: number;
    /**
     * name for each element in the list
     */
    entryLabel?: string;
    /**
     * used to display an image stored at the specified attribute name
     */
    thumbnail?: {
        type?: string;
        valueKey?: string;
    };
    /**
     * The schema used for each element in the array.
     */
    schema?: Array<(widgetSchemaHidden | widgetSchemaTab)>;
};
export declare namespace widgetSchemaArray {
    enum type {
        ARRAY = "array"
    }
}
