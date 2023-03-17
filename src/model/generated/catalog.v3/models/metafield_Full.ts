/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { metafield_Base } from './metafield_Base';

export type metafield_Full = ({
    /**
     * Unique ID of the *Metafield*. Read-Only.
     */
    readonly id?: number;
} & metafield_Base & {
    /**
     * The type of resource with which the metafield is associated.
     *
     */
    resource_type?: metafield_Full.resource_type;
    /**
     * The ID of the resource with which the metafield is associated.
     *
     */
    resource_id?: number;
    /**
     * Date and time of the metafield's creation. Read-Only.
     *
     */
    readonly date_created?: Date;
    /**
     * Date and time when the metafield was last updated. Read-Only.
     *
     */
    readonly date_modified?: Date;
});

export namespace metafield_Full {

    /**
     * The type of resource with which the metafield is associated.
     *
     */
    export enum resource_type {
        CATEGORY = 'category',
        BRAND = 'brand',
        PRODUCT = 'product',
        VARIANT = 'variant',
    }


}

