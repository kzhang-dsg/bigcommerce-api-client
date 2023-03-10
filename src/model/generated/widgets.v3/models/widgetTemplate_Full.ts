/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { widgetTemplate_Base } from './widgetTemplate_Base';

export type widgetTemplate_Full = (widgetTemplate_Base & {
    /**
     * The primary identifier.
     */
    uuid?: string;
    /**
     * The kind of widget template.
     */
    kind?: string;
    /**
     * The date on which this object was initially created.
     */
    date_created?: string;
    /**
     * The date on which this object was last updated.
     */
    date_modified?: string;
    /**
     * The identifier to the current version of this widget template.
     */
    current_version_uuid?: string;
    /**
     * A read-only value. Do not attempt to set or modify this value in a POST or PUT operation.
     */
    icon_name?: string;
});

