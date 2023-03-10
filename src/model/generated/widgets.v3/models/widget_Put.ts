/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { widget_Base } from './widget_Base';

export type widget_Put = (widget_Base & {
    /**
     * The widget template UUID.
     */
    widget_template_uuid?: string;
    channel_id?: number;
    /**
     * Upgrade the Widget to latest version of the WidgetTemplate.
     */
    upgrade?: boolean;
});

