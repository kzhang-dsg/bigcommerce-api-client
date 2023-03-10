/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CouponCode } from './CouponCode';
import type { NotifyAtMinutes } from './NotifyAtMinutes';
import type { Template } from './Template';

export type AbandondedCartEmail = {
    id?: number;
    notify_at_minutes?: NotifyAtMinutes;
    coupon_code?: CouponCode;
    template?: Template;
    is_active?: boolean;
    sent_num?: number;
};

