/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelId } from './ChannelId';
import type { DefaultCurrency } from './DefaultCurrency';
import type { EnabledCurrencies } from './EnabledCurrencies';

/**
 * Details about currency assignments for a specific channel.
 */
export type CurrencyRequiredWithChannelId = {
    channel_id: ChannelId;
    enabled_currencies: EnabledCurrencies;
    default_currency: DefaultCurrency;
};

