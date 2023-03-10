import type { AbandonedCartSettings } from './AbandonedCartSettings';
import type { metaEmpty_Full } from './metaEmpty_Full';
/**
 * The response object of abandoned cart settings at the global level
 */
export type GlobalAbandonedCartSettingsResponse = {
    data?: AbandonedCartSettings;
    meta?: metaEmpty_Full;
};
