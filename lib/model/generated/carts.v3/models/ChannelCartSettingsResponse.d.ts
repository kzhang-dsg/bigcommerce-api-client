import type { ChannelCartSettings } from './ChannelCartSettings';
import type { metaCollection_open } from './metaCollection_open';
/**
 * The response object of cart settings overrides for a channel.
 */
export type ChannelCartSettingsResponse = {
    data?: ChannelCartSettings;
    meta?: metaCollection_open;
};
