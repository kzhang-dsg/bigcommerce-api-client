import type { adjuster_Full } from './adjuster_Full';
export type adjusters_Full = {
    price?: adjuster_Full;
    weight?: adjuster_Full;
    /**
     * The URL for an image displayed on the storefront when the modifier value is selected.Limit of 8MB per file.
     *
     */
    image_url?: string;
    purchasing_disabled?: {
        /**
         * Flag for whether the modifier value disables purchasing when selected on the storefront. This can be used for temporarily disabling a particular modifier value.
         *
         */
        status?: boolean;
        /**
         * The message displayed on the storefront when the purchasing disabled status is `true`.
         *
         */
        message?: string;
    };
};
