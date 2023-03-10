/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { widgetSchemaConditional } from './widgetSchemaConditional';

export type new_model = Array<{
    type?: string;
    label?: string;
    id?: string;
    default?: number;
    typeMeta?: string;
    conditional?: widgetSchemaConditional;
}>;
