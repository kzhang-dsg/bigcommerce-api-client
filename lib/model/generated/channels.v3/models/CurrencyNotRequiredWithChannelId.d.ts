import type { ChannelId } from './ChannelId';
import type { DefaultCurrency } from './DefaultCurrency';
import type { EnabledCurrencies } from './EnabledCurrencies';
/**
 * Details about currency assignments for a specific channel.
 */
export type CurrencyNotRequiredWithChannelId = {
    channel_id?: ChannelId;
    enabled_currencies?: EnabledCurrencies;
    default_currency?: DefaultCurrency;
};
