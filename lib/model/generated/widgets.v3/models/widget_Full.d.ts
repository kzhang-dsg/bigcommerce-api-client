import type { widget_Base } from './widget_Base';
import type { widgetTemplate_Full } from './widgetTemplate_Full';
export type widget_Full = (widget_Base & {
    /**
     * The primary identifier.
     */
    uuid?: string;
    widget_template?: widgetTemplate_Full;
    /**
     * The date on which this object was initially created.
     */
    date_created?: Date;
    /**
     * The date on which this object was last updated.
     */
    date_modified?: Date;
    /**
     * The identifier of the widget template version associated with this widget.
     */
    version_uuid?: string;
    /**
     * The ID of the channel on which this widget exists.
     */
    channel_id?: number;
});
