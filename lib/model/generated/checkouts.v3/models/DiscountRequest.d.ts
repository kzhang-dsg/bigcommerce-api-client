export type DiscountRequest = {
    cart?: {
        discounts?: Array<{
            discounted_amount: number;
            name?: string;
        }>;
    };
};
