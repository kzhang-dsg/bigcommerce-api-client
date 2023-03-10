import type { ChannelConfigMeta } from './ChannelConfigMeta';
import type { ChannelName } from './ChannelName';
import type { ChannelPlatform } from './ChannelPlatform';
import type { ChannelStatus } from './ChannelStatus';
import type { ChannelType } from './ChannelType';
import type { ExternalId } from './ExternalId';
import type { IsListableFromUI } from './IsListableFromUI';
import type { IsVisible } from './IsVisible';
export type CreateChannelReq = {
    config_meta?: ChannelConfigMeta;
    external_id?: ExternalId;
    is_listable_from_ui?: IsListableFromUI;
    is_visible?: IsVisible;
    status?: ChannelStatus;
    name: ChannelName;
    type: ChannelType;
    platform: ChannelPlatform;
};
