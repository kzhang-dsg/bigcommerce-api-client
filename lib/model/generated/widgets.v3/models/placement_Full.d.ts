import type { placement_Base } from './placement_Base';
import type { widget_Full } from './widget_Full';
export type placement_Full = ({
    /**
     * The primary identifier.
     */
    uuid?: string;
    /**
     * The template file that you would like to target.
     */
    template_file?: string;
    /**
     * The date on which this object was initially created.
     */
    date_created?: string;
    /**
     * The date on which this object was last updated.
     */
    date_modified?: string;
    /**
     * The ID of the channel on which this placement exists.
     */
    channel_id?: number;
} & placement_Base & {
    widget?: widget_Full;
});
