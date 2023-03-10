import type { widgetTemplate_Base } from './widgetTemplate_Base';
export type widgetTemplate_Put = (widgetTemplate_Base & {
    /**
     * Can be added to create a new widget template version instead of updating the current one.
     */
    create_new_version?: boolean;
    /**
     * The id of the channel on which to place this template.
     */
    channel_id?: number;
});
