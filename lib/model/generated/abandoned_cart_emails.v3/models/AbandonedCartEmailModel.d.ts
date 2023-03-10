import type { CouponCode } from './CouponCode';
import type { NotifyAtMinutes } from './NotifyAtMinutes';
import type { Template } from './Template';
export type AbandonedCartEmailModel = {
    notify_at_minutes?: NotifyAtMinutes;
    coupon_code?: CouponCode;
    template?: Template;
};
