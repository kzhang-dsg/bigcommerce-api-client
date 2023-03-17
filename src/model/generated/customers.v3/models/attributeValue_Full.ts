/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { attributeValue_Base } from './attributeValue_Base';

export type attributeValue_Full = (attributeValue_Base & {
    /**
     * The date the customer attribute was created.
     */
    date_created?: Date;
    /**
     * The date the customer attribute was modified.
     */
    date_modified?: Date;
});

