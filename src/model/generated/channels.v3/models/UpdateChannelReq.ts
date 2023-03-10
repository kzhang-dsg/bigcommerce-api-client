/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelConfigMeta } from './ChannelConfigMeta';
import type { ChannelName } from './ChannelName';
import type { ChannelStatus } from './ChannelStatus';
import type { ExternalId } from './ExternalId';
import type { IsListableFromUI } from './IsListableFromUI';
import type { IsVisible } from './IsVisible';

export type UpdateChannelReq = {
    config_meta?: ChannelConfigMeta;
    external_id?: ExternalId;
    is_listable_from_ui?: IsListableFromUI;
    is_visible?: IsVisible;
    name?: ChannelName;
    status?: ChannelStatus;
};

