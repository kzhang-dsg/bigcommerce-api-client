import type { script_Base } from './script_Base';
export type script_Full = ({
    /**
     * The primary identifier.
     */
    uuid?: string;
    /**
     * The date on which this object was initially created.
     */
    date_created?: Date;
    /**
     * The date on which this object was last updated.
     */
    date_modified?: Date;
} & script_Base);
