/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CouponCode } from './CouponCode';
import type { NotifyAtMinutes } from './NotifyAtMinutes';
import type { Template } from './Template';

export type AbandondedCartEmailPayload = {
    is_active?: boolean;
    coupon_code?: CouponCode;
    notify_at_minutes?: NotifyAtMinutes;
    template?: Template;
};

