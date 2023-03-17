/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type orderMessages = Array<{
    id?: number;
    order_id?: number;
    staff_id?: number;
    customer_id?: number;
    type?: string;
    subject?: string;
    message?: string;
    status?: string;
    is_flagged?: boolean;
    date_created?: Date;
    customer?: any;
}>;
