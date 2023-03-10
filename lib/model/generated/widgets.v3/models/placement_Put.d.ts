import type { placement_Base } from './placement_Base';
export type placement_Put = ({
    /**
     * The template file that you would like to target.
     */
    template_file?: string;
    /**
     * A widget identifier.
     */
    widget_uuid?: string;
    /**
     * The ID of the channel on which this placement exists.
     */
    channel_id?: number;
} & placement_Base);
