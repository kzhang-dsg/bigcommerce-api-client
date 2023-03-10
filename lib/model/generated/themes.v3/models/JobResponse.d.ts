import type { OpenMeta } from './OpenMeta';
/**
 * Response for /GET Jobs by Id.
 */
export type JobResponse = {
    /**
     * The job for theme upload or download
     */
    data?: {
        /**
         * The errors.
         */
        errors?: Array<{
            /**
             * The error.
             */
            error?: string;
            /**
             * The message.
             */
            message?: string;
        }>;
        /**
         * The identifier.
         */
        id?: string;
        /**
         * The percent complete.
         */
        percent_complete?: number;
        /**
         * The result.
         */
        result?: any;
        /**
         * The status.
         */
        status?: JobResponse.status;
        /**
         * The time.
         */
        time?: string;
        /**
         * The warnings.
         */
        warnings?: Array<{
            /**
             * The message.
             */
            message?: string;
            /**
             * The warning.
             */
            warning?: string;
        }>;
    };
    meta?: OpenMeta;
};
export declare namespace JobResponse {
    /**
     * The status.
     */
    enum status {
        COMPLETED = "COMPLETED",
        QUEUED = "QUEUED",
        WORKING = "WORKING",
        FAILED = "FAILED"
    }
}
