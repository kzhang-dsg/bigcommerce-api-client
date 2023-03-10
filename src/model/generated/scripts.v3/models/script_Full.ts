/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { script_Base } from './script_Base';

export type script_Full = ({
    /**
     * The primary identifier.
     */
    uuid?: string;
    /**
     * The date on which this object was initially created.
     */
    date_created?: string;
    /**
     * The date on which this object was last updated.
     */
    date_modified?: string;
} & script_Base);

