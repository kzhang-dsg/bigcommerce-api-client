/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { widgetSchemaSetting_Base } from './widgetSchemaSetting_Base';

export type widgetSchemaTabSections = {
    label?: string;
    /**
     * For examples of each type of setting, see [Page Builder > Schema Settings](/stencil-docs/page-builder/schema-settings/alignment) in Theme Docs.
     */
    settings?: Array<widgetSchemaSetting_Base>;
};

